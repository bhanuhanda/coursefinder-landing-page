import { Box, Button, Paper, styled } from "@mui/material";

const GradientButton = styled(Button)({
    background: 'linear-gradient(90deg, rgba(254,152,81,1) 0%, rgba(255,109,87,1) 35%)',
    textTransform: 'none',
});

const ImageBoxWithShadow = styled(Box)`
  height: 400px;
  background-image: url('src/assets/image1.png');
  background-size: cover;
  box-shadow: -41px -41px 0px -5px rgba(255,231,201,1);
  border-radius: 14px;
`;

const HeroSectionTop = styled(Box)`
  height: fit-content;
  width: 100vw;
  background-color: #6c48f0;
`;

const BlobShape = styled(Box)`
  line-height: 0;
`;

const FooterShape = styled(Box)`
  line-height: 0;
  transform: rotate(180deg);
`;

const FormContainer = styled(Box)({
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '2rem',
  display: 'flex',
  gap: 5
});

const CarouselCard = styled(Paper)`
    height: 300px;
    margin: 1rem;
    border-radius: 14px;
    padding: 1.5rem;
`;

export { GradientButton, ImageBoxWithShadow, HeroSectionTop, BlobShape, FooterShape, FormContainer, CarouselCard };
