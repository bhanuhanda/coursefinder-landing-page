import { Box, Button, Typography } from '@mui/material'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ResponsiveAppBar from '../components/Nav';
import { BlobShape, GradientButton, HeroSectionTop } from '../styles';
import { heroText } from '../helpers/constants';

const boxSx={ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', mt: 8 };
const innerBoxSx={ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textWrap: 'wrap', width: { xs: '90%', md: '40%'} };
const flexBoxSx={ display: 'flex', justifyContent: 'center', mt:5, gap:3 };

const Hero = () => {
  return (
    <Box>
        <HeroSectionTop>
          <ResponsiveAppBar />
          <Box sx={boxSx}>
            <Box sx={innerBoxSx}>
              <Box display={'flex'} gap={4} mb={3}>
                <Typography>Home</Typography>
                <Typography>Pune Branch</Typography>
              </Box>

              <Typography variant='h4' sx={{ textWrap: 'wrap' }}>KC Overseas Education</Typography>
              <Typography variant='h4'>Pune</Typography>

              <Typography mt={3}>{heroText}</Typography>
              <Box sx={flexBoxSx} flexDirection={{ xs: 'column', md: 'row' }} >
                <GradientButton variant='contained'>Enquire Now</GradientButton>
                <Box display={'flex'} alignItems={'center'}>
                  <ExpandCircleDownIcon fontSize='large' />
                  <Button variant='text' sx={{ color: '#fff' }}>Branch Address</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </HeroSectionTop>
        <BlobShape>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" style={{ fill: '#6C48F0' }}></path>
          </svg>
        </BlobShape>
      </Box>
  )
}

export default Hero