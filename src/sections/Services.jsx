import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { serviceDetails, services, servicesHeading, servicesText } from '../helpers/constants'
import { GradientButton, ImageBoxWithShadow } from '../styles';

const containerSx={ my: 4, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const typographySx={ textAlign: 'center', fontWeight: 'bold', my: 4 };
const boxSx={ width: { xs: '100%', md: '60%' }, display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center', m: 2, flexWrap: 'wrap' };
const paperSx={ width: { xs: '90%', md: '41%'}, height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 3, pl: 2 };
const wrapperSx={ width: { xs: '90%', md: '60%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, mt: 8};

const Services = () => {
  return (
    <Box sx={containerSx}>
          <Typography variant='h4' sx={typographySx}>Services we provide</Typography>
          <Box sx={boxSx}>
            {services.map((service) => {
                return <Paper key={service.text} sx={paperSx}  elevation={5}>{service.icon}{service.text}</Paper>
            })}
          </Box>
          <GradientButton variant='contained' my='2rem'>Enquire Now</GradientButton>
          <Box sx={wrapperSx} flexDirection={{ xs: 'column', md: 'row' }}>
            <ImageBoxWithShadow sx={{ width: { xs: '80%', md: '50%'}}} textAlign={'center'} />
            <Box sx={{ width: { xs: '100%', md: '50%'}}}>
              <Typography variant='h5'>{servicesHeading}</Typography>
              <Typography my={5}>{servicesText}</Typography>
              <List>
                {serviceDetails.map((service) => (
                    <ListItem key={service.text} disablePadding>
                        <ListItemIcon>
                            {service.icon}
                        </ListItemIcon>
                        <ListItemText primary={service.text} />
                    </ListItem>
                ))}
              </List>
            </Box>
          </Box>
      </Box>
  )
}

export default Services