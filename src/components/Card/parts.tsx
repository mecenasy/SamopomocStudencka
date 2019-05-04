import styled from 'styled-components';
import {
   Card as CardBase,
   Button as ButtonBace,
} from 'react-bootstrap';

export const CardHeaderInnerWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const TitleHeader = styled.p`
   margin: 0;
   font-size: 22px;
   font-weight: bold;
`;

export const CardHeader = styled(CardBase.Header)`
   border-bottom: none;
   padding: 8px 8px 8px 24px;
`;

export const CardBody = styled(CardBase.Body)`
   padding: 8px 8px 8px 24px;
`;

export const Button = styled(ButtonBace)`

   &:focus {
      box-shadow: none;
   }
`;
