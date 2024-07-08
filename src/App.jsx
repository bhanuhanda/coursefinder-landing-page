import Footer from './sections/Footer';
import Testimonies from './sections/Testimonies';
import Services from './sections/Services';

import { Box } from '@mui/material';
import './styles.jsx';
import Hero from './sections/Hero';

function App() {
  return (
    <Box>
      <Hero />
      <Services />
      <Testimonies />
      <Footer />
    </Box>
  )
}

export default App;
