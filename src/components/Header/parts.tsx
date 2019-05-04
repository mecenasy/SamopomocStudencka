
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import {
   Button as ButtonBace,
   Navbar as NavbarBace,
} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

export const Link = styled(HashLink)`
   &:hover {
      color: #16181b;
      text-decoration: none;
      background-color: #f8f9fa;
   }

   display: block;
   width: 100%;
   padding: .25rem 1.5rem;
   clear: both;
   font-weight: 400;
   color: #212529;
   text-align: inherit;
   white-space: nowrap;
   background-color: transparent;
   border: 0;
`;
export const Header = styled(Flex)`
   align-items: center;
   justify-content: space-between;
   width: 100%;
   padding: 2px;
`;

export const Title = styled.h1`
   width: 100%;
   color: white;
   text-align: center;
   font-size: 30px;
`;

export const ButtonWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
`;

export const Button = styled(ButtonBace)`
   &:focus {
      box-shadow: none;
   }
`;

export const Navbar = styled(NavbarBace)`
   margin-bottom: 16px;
`;
