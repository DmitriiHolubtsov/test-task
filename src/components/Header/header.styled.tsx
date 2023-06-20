import { styled, Typography } from '@mui/material';
import palette from '../../cdk/theme/palette';

const fontFamily = 'DM Sans';

export const HeaderStyled = styled(Typography)`
  ${({ theme }) => theme.typography.h1};
  font-family: ${fontFamily};
  font-weight: 700;
  line-height: 68px;
  font-size: 52px;
  color: ${palette.black};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 28px;
    line-height: 30px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
  }
`;
