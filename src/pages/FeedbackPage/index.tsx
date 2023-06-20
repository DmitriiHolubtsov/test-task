import React, { ReactElement } from 'react';
import { Logo, Quota, ArrowLeft, ArrowRight } from '../../assets/icons';
import Header from '../../components/Header';
import ButtonPrimary from '../../components/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { 
  PageWrapper,
  Container, 
  SubHeader, 
  Description,
  TestimonialsContainer, 
  TextContainer,
  TestimonialText,
  TestimonialImage,
  AuthorName,
  AuthorFrom,
  ControlPrev,
  ControlNext,
} from './feedback.styled';
import { TESTIMONIALS } from './data';

export default function Home(): ReactElement {
  return (
    <PageWrapper>
      <Container>
        <Logo />
        <SubHeader>Testimonials</SubHeader>
        <Header>What our clients say about us</Header>
      </Container>

      <Carousel 
        autoPlay
        showArrows
        swipeable
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler) => {
          return (
            <ControlPrev
              onClick={clickHandler}
            >
              <ArrowLeft />
            </ControlPrev>
          );
        }}
        renderArrowNext={(clickHandler) => {
          return (
            <ControlNext 
              onClick={clickHandler}
            >
              <ArrowRight />
            </ControlNext>
          );
        }}
        >
        {TESTIMONIALS.map(({ mainText, authorName, authorPosition, alt, src }) => (
          <TestimonialsContainer key={alt}>
            <TextContainer>
              <Quota />
              <TestimonialText>
                {mainText}
              </TestimonialText>
              <AuthorName>{authorName}</AuthorName>
              <AuthorFrom>{authorPosition}</AuthorFrom>
            </TextContainer>
            <TestimonialImage >
              <img src={src} alt={alt} />
            </TestimonialImage>
        </TestimonialsContainer>
        ))}
      </Carousel>

      <Container>
        <Header>Leave your feedback</Header>
        <Description>If you had a chance to work with us, please, leave your feedback and we’ll happily add it to our testimonials page. Thank you!</Description>
        <ButtonPrimary>leave your feedback</ButtonPrimary>
      </Container>
    </PageWrapper>
  );
}
