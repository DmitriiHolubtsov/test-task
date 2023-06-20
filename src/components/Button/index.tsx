import React, { ReactElement, ReactNode } from 'react';
import { 
    ButtonStyled, 
} from './button.styled';

interface Button {
    children: ReactNode;
  }

export default function ButtonPrimary({ children }: Button): ReactElement {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  );
}
