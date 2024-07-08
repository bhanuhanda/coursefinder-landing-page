import { Box, Typography } from '@mui/material'
import CarouselComponent from '../components/Carousel'

const Testimonies = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8, py: 8, backgroundColor: '#ffdcd8' }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 4 }}>Our students love us</Typography>
        <CarouselComponent />
      </Box>
  )
}

export default Testimonies