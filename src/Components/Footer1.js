import React from 'react';
import '../Assets/Footer1.css'
import { Container,Typography,Grid,Link,ThemeProvider,createTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {makeStyles} from '@mui/styles';
import image10 from './LogoPic.jpg';
const theme=createTheme();
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#151515',
    padding: '80px 0',
  },
  container: {
    maxWidth: 1170,
    margin: 'auto',
  },
  footerCol: {
    width: '25%',   
    padding: '0 15px',
  },
  footerTitle: {
    fontSize: 18,
    color: '#FFF',
    textTransform: 'capitalize',
    marginBottom: 35,
    fontWeight: 500,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      backgroundColor: '#E91E63',
      width: 50,
      height: 2,
    },
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      marginBottom: 10,
      '& a': {
        color: '#DDD',
        display: 'block',
        fontSize: '1rem',
        fontWeight: 300,
        textTransform: 'capitalize',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: '#FFF',
          paddingLeft: 7,
        },
      },
    },
  },
  socialLinks: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '& a': {
      color: '#FFF',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
     // display: 'inline-block',
      height: 40,
      width: 40,
      borderRadius: '50%',
      textAlign: 'center',
      margin: '0 10px 10px 0',
      lineHeight: '50px',
      bottom:'-10px',
      transition: 'all 0.5s ease',
      '&:hover': {
        color: '#151515',
        backgroundColor: '#FFF',
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
    <ThemeProvider theme={theme}>
        <footer className={classes.footer}>
    <>
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} className={classes.footerCol}>
            <Typography variant="h6" className={classes.footerTitle}>
              Product
            </Typography>
            <ul className={classes.footerLinks}>
              <li>
                <Link href="#">AI Health Assistant</Link>
              </li>
              <li>
                <Link href="#">Second Opinion</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.footerCol}>
            <Typography variant="h6" className={classes.footerTitle}>
              Company
            </Typography>
            <ul className={classes.footerLinks}>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Join as a Doctor</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.footerCol}>
            <Typography variant="h6" className={classes.footerTitle}>
              Resources
            </Typography>
            <ul className={classes.footerLinks}>
              <li>
                <Link href="#">AI Doctor</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Knowledge Base</Link>
              </li>
              <li>
                <Link href="#">Symptoms Guide</Link>
              </li>
              <li>
                <Link href="#">All Articles</Link>
              </li>
              <li>
                <Link href="#">All Doctors</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.footerCol}>
            <Typography variant="h6" className={classes.footerTitle}>
              Follow Us
            </Typography>
            <br></br>
            <div className={classes.socialLinks}>
              <Link href="#">
                <FacebookIcon />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="#">
                <InstagramIcon />
              </Link>
              <Link href="#">
                <LinkedInIcon />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
    </>
    </footer>
    </ThemeProvider>
    <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue,Race Course, Coimbatore-TamilNadu</span>
                            </div>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9345625851</span>
                            </div>
                      
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        
                            </div>
                    </div>
                    {/* <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                        </div>
                    </div>
                     <div class="col-xl-4 col-md-4 mb-30"> 
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                        </div>
                     </div>  */}
                </div>
            </div>
            
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                   
                    
                     <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/abc92/">abc</a></p>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
    </footer>
    </div>
    
  );
};

export default Footer;