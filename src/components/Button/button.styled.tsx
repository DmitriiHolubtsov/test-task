import { styled, Button } from '@mui/material';
import palette from '../../cdk/theme/palette';

const fontFamily = 'DM Sans';

export const ButtonStyled = styled(Button)`
  font-family: ${fontFamily};
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  background: ${palette.orange};
  border-radius: 26px;
  color: ${palette.white};
  transition: all 0.3s ease-out;
  max-width: 100%;
  height: 54px;
  padding: 14px 32px;
  text-transform: uppercase;
  &:hover {
    background: ${palette.orange};
    opacity: .8;
    transition: all 0.3s ease-out;
  }
`;