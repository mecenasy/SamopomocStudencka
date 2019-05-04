
import styled from 'styled-components';
import withoutProps from '~/utils/withoutPropsHoc';
import DropzoneBase from 'react-dropzone';
import {
   Dropdown as DropdownBase,
   Button as ButtonBace,
} from 'react-bootstrap';

const DropzoneWithoutProp = withoutProps(['active'])(DropzoneBase);

export const Dropzone = styled(DropzoneWithoutProp)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   width: 100%;
   height: 64px;
   border: 1px dashed grey;
   border-radius: 4px;

   &:hover {
      border: 1px dashed black;
   }
`;

export const Button = styled(ButtonBace)`
   &:focus {
      box-shadow: none;
   }
`;

export const Dropdown = styled(DropdownBase)`
   margin-bottom: 16px;
`;

export const Toggle = styled(DropdownBase.Toggle)`
   width: 100%;
   &:focus {
      box-shadow: none;
   }
`;

export const Menu = styled(DropdownBase.Menu)`
   width: 100%;
   padding: 16px;
`;

export const DropdawonButton = styled.div`
   &:hover {
      color: #16181b;
      text-decoration: none;
      background-color: #f8f9fa;
   }

   display: block;
   width: 100%;
   padding: 2px;
   clear: both;
   font-weight: 400;
   color: #212529;
   text-align: inherit;
   white-space: nowrap;
   background-color: transparent;
   border: 0;
`
