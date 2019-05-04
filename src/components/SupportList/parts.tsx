import styled from 'styled-components';
import { Box } from '@rebass/grid';
import {
   CardColumns as CardColumnsBace,
} from 'react-bootstrap';

export const ButtonBox = styled(Box)`
   display: flex;
   justify-content: flex-end;
   margin-right: 14px;
`;

export const CardColumns = styled(CardColumnsBace)`
   column-count: 1;
   margin: 0 32px;
   width: 100%;
`;
