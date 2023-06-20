import { styled, Typography, Box } from '@mui/material';
import palette from '../../cdk/theme/palette';

const fontFamily = 'DM Sans';

export const PageWrapper = styled(Box)`
  width: 100%; 
  padding-top: 60px; 
  padding-bottom: 100px;
  position: relative;
  & .carousel-root {
    max-width: 1370px;
    margin: 0 auto;
    max-height: 597px;
    margin-top: 60px;
    margin-bottom: 160px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-top: 30px;
      margin-bottom: 60px;
      max-height: unset;
    }
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const ControlPrev = styled('div')`
  position: absolute;
  z-index: 1;
  background-color: ${palette.orange};
  width: 55px;
  height: 55px;
  opacity: 1;
  bottom: 0;
  right: 55px;
  border-right: 1.1px solid ${palette.orangeLight};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    & svg {
      opacity: 0.7;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    top: 0;
    right: 40px;
    width: 40px;
    height: 40px;
  }
`;

export const ControlNext = styled('div')`
  position: absolute;
  z-index: 1;
  background-color: ${palette.orange};
  width: 55px;
  height: 55px;
  opacity: 1;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    & svg {
      opacity: 0.7;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    top: 0;
    width: 40px;
    height: 40px;
  }
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubHeader = styled(Typography)`
  ${({theme}) => theme.typography.h5};
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: ${palette.orange};
  margin-top: 100px;
  margin-bottom: 16px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
export const Description = styled(Typography)`
  ${({theme}) => theme.typography.h5};
  font-family: ${fontFamily};
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: ${palette.black};
  max-width: 594px;
  margin-top: 20px;
  margin-bottom: 48px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 22px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const TestimonialsContainer = styled('div')`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const TextContainer = styled(Box)`
  width: 100%;
  max-width: 788px;
  padding: 70px 117px 70px 105px;
  background-color: ${palette.gray};
  text-align: left;
  max-height: 597px;
  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 30px 16px 30px 16px;
    height: 597px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 50px 16px 30px 16px;
    height: auto;
  }
`;

export const TestimonialText = styled('span')`
  display: block;
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 32px;
  margin-bottom: 40px;
  height: 308px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 11;
  white-space: pre-wrap;
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 16px;
    margin-bottom: 16px;
    height: auto;
  }
`;

export const AuthorName = styled(Box)`
  font-family: ${fontFamily};
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 2px;
`;

export const AuthorFrom = styled(Box)`
  font-family: ${fontFamily};
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

export const TestimonialImage = styled(Box)`
  width: 100%;
  max-width: 582px;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }

  //Using important because of slider own classes conflict

  ${({ theme }) => theme.breakpoints.down('lg')} {
    & img {
      width: 582px!important;
      height: 100%;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    & img {
      width: 100%!important;
      height: 100%;
    }
  }
`;