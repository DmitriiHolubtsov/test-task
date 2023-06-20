import React, { ReactElement, ReactNode } from 'react';
import { 
    HeaderStyled, 
} from './header.styled';

interface HeaderText {
    children: ReactNode;
  }

export default function Header({ children }: HeaderText): ReactElement {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  );
}
