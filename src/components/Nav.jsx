import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { navItems } from '../helpers/constants';

const headingSx={
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}

const subheadingSx={
  mr: 2,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
};

const navItemsSx={ my: 3, ml: 1, color: 'white', display: 'block' };
const navButtonSx={ my: 3, ml: 2, color: 'white', display: 'block', borderColor: '#fff' };

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{
        backgroundColor: '#6c48f0',
      }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={headingSx}
          >
            KC OVERSEAS education
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={subheadingSx}
          >
            KC OVERSEAS education
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navItems.slice(0, navItems.length-1).map((page) => (
              <Button
                key={page}
                sx={navItemsSx}
              >
                {page}
              </Button>
            ))}
            {navItems.slice(-1).map((page) => (
              <Button
                key={page}
                sx={navButtonSx}
                variant='outlined'
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
