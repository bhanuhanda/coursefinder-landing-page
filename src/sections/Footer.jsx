import { Box, FormControl, InputLabel, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { FooterShape, FormContainer, GradientButton } from '../styles';

const boxSx={ height: 'fit-content', width: '100vw', backgroundColor: '#0E1B2C', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' };
const textFieldStyle={ backgroundColor: 'white', borderRadius: 4, marginRight: 10, height: '40px' };
const formControlStyle={ backgroundColor: 'white', borderRadius: 4, marginRight: 10 };

const Footer = () => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');

  return (
    <Box>
        <FooterShape>
          <svg style={{ height: '77px', width: 'calc(100% + 1.3px)' }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" style={{ fill: '#0E1B2C' }}></path>
          </svg>
        </FooterShape>
        <Box sx={boxSx}>
          <Typography variant='h4' textAlign={'center'}>Stay updated with KC Overseas</Typography>
          <FormContainer flexDirection={{ xs: 'column', md: 'row'}}>
            <TextField
              label="Email ID"
              variant="outlined"
              value={email}
              size="small"
              onChange={(e) => setEmail(e.target.value)}
              style={textFieldStyle}
            />
            <FormControl variant="outlined" style={formControlStyle} size="small">
              <InputLabel id="demo-simple-select-label">I&apos;m Interested in</InputLabel>
              <Select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                sx={{ width: '250px', textAlign: 'left' }}
              >
              </Select>
            </FormControl>
            <GradientButton variant="contained" sx={{ height: '40px', width: { xs: '250px', md: 'auto' } }}>
              Subscribe Now
            </GradientButton>
          </FormContainer>
        </Box>
      </Box>
  )
}

export default Footer