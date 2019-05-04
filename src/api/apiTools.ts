import axios, {
   AxiosTransformer,
   AxiosInstance,
   AxiosPromise,
   AxiosRequestConfig,
} from 'axios';
import { CANCEL } from 'redux-saga';

export interface AdditionalAxiosHelpers {
   concatTransformResponse: (transformers: AxiosTransformer | AxiosTransformer[]) => AxiosTransformer[];
   concatTransformRequest: (transformers: AxiosTransformer | AxiosTransformer[]) => AxiosTransformer[];
}

const concatNewTransformersToArrayFromShittyAxiosTransformerSometimesObjectSometimesArraySometimesFunctionForFucksSake =
   (defaultTransformers: AxiosTransformer | AxiosTransformer[] | { [key: number]: AxiosTransformer }, additionalTransformers: AxiosTransformer | AxiosTransformer[]): AxiosTransformer[] => {
      const transformers: AxiosTransformer[] = [];

      // tslint:disable:no-parameter-reassignment
      if (typeof additionalTransformers === 'undefined') { additionalTransformers = []; }

      if (typeof defaultTransformers === 'undefined') { defaultTransformers = []; }
      if (typeof defaultTransformers === 'function') {
         return [defaultTransformers].concat(additionalTransformers);
      }
      if (Array.isArray(defaultTransformers)) {
         return defaultTransformers.concat(additionalTransformers);
      }

      // to zwalcza głupi obiekt postaci {0: f, 1: f}
      for (const key in defaultTransformers) {
         if (defaultTransformers.hasOwnProperty(key)) {
            transformers[+key] = defaultTransformers[key];
         }
      }

      return transformers.concat(additionalTransformers); // 🤖🤖🤖
   };

function concatTransformRequest(this: AxiosInstance, additionalTransformers: AxiosTransformer | AxiosTransformer[]): AxiosTransformer[] {
   return concatNewTransformersToArrayFromShittyAxiosTransformerSometimesObjectSometimesArraySometimesFunctionForFucksSake(this.defaults.transformRequest, additionalTransformers);
}
function concatTransformResponse(this: AxiosInstance, additionalTransformers: AxiosTransformer | AxiosTransformer[]): AxiosTransformer[] {
   return concatNewTransformersToArrayFromShittyAxiosTransformerSometimesObjectSometimesArraySometimesFunctionForFucksSake(this.defaults.transformResponse, additionalTransformers);
}

export const enhanceAxiosInstance = (instance: AxiosInstance): AxiosInstance & AdditionalAxiosHelpers => {
   (instance as AxiosInstance & AdditionalAxiosHelpers).concatTransformRequest = concatTransformRequest.bind(instance);
   (instance as AxiosInstance & AdditionalAxiosHelpers).concatTransformResponse = concatTransformResponse.bind(instance);
   return instance as AxiosInstance & AdditionalAxiosHelpers;
};

export const axiosMethodsDecorator = (instance: AxiosInstance) => {
   const methodsToOverride = [
      { methodName: 'put', configArgIndex: 2 },
      { methodName: 'post', configArgIndex: 2 },
      { methodName: 'get', configArgIndex: 1 },
      { methodName: 'patch', configArgIndex: 2 },
   ];

   methodsToOverride.forEach((methodObj) => {
      const { methodName, configArgIndex } = methodObj;
      const oldMethod = instance[methodName];

      instance[methodName] = (...args) => {
         let cancel: () => void;
         const requestConfig: AxiosRequestConfig = args[configArgIndex] || {};

         requestConfig.cancelToken = new axios.CancelToken((c) => {
            cancel = c;
         });
         args[configArgIndex] = requestConfig;

         const promise: AxiosPromise = oldMethod(...args);
         promise[CANCEL] = () => {
            cancel();
         };

         return promise;
      };
   });
};

export { concatNewTransformersToArrayFromShittyAxiosTransformerSometimesObjectSometimesArraySometimesFunctionForFucksSake };
