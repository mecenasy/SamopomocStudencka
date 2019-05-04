
import req from './apiProxy';
import { SupportType, SupportFormData } from '~/store/constance/supportData';

export const getMenu = () => req.get('/menu');

export const getSupportData = (type: SupportType) => req.get('/supportData/' + type);

export const getAllSupportData = () => req.get('/supportData');

export const getSupportDataBySearchText = (searchText: string) => req.get('/search/' + searchText);

export const getSupportFile = (fileName: string) => req.get('/files/' + fileName, { responseType: 'blob' });

export const postSupportData = (formData: SupportFormData) => {
   const data: FormData = new FormData();
   const name = 'name';
   data.append('description', formData.description);
   data.append('title', formData.title);
   data.append('type', formData.type);
   data.append('file', formData.file, formData.file[name]);

   return req.post('/files', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
   });
};
