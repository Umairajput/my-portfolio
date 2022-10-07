import React from 'react'
import DrawerAppBar from './navbar'
import './style.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import my_2nd_pic from './Images/Umair.png'
import my_4rth_pic from './Images/my-4rth-pic.png'
import footer_logo from './Images/top-images.webp'
import { Link } from 'react-router-dom'
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';

function About() {
    return (
        <div style={{height :'100vh'}}>
            <div className='container'> 
            <div className='main_div'>
                <div id = 'top'></div>
            <div className='about_navbar' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '70px'}}>
                        <DrawerAppBar className= "about_nav"/>
                    </div>
                <h1 className='about_us_heading'>ABOUT US</h1>
                <center>
                    <p className='spn'><Link className='footer_header_links' to='/'>HOME</Link></p>
                    <div className='arrow_icon'><ChevronRightIcon style = {{marginTop:'10px'}}/></div>
                    <p className='spn' style={{cursor:'pointer'}}><b>ABOUT</b></p>
                </center>
            </div>
            </div>
            <div className='second_div'>
                <div className='linear_background'>
                    <img className='image_2' src={my_2nd_pic} />
                </div>
                <div className='about_div'>
                    <h3 style={{ color: '#05364d', display: 'inline' }}>ABOUT ME</h3>
                    <h1 className='about_heading'>Creative Art Director<br />
                        And Designer</h1>
                    <p className='about_paragraph'>Also signs his face were digns fish don't first isn't over evening hath<br />
                        divided days light darkness gathering moved dry all darkness then fourth <br />
                        can't create d forth Also signs Also signs his face were moltenus Also<br />
                        signs his face</p>
                    <div className='button_div'>
                        <button className='button'>DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
            <div className='fourth_div'>
                <center>
                    <div>
                        <h1 className='test_heading'>MY PROFILE <br /> AND BIO</h1>
                    </div>
                </center>
                <center>
                    <div className='bio_div'>
                        <div className='linear_2_background'>
                            <img className='image_3' src={my_4rth_pic} />
                        </div>
                        <div>
                            <h2 style={{ color: '#05364d', marginTop: '15px' }}>Umair Rajput</h2>
                            <p style={{ color: '#05364d', marginTop: '15px' }}>I AM UMAIR! I AM A FRONTEND DEVELOPER! I WANT <br /> TO  BECOME A SUCCESSFUL PROGRAMMER ❤️ان شاء الل</p>
                        </div>
                    </div>
                </center>
            </div>
            <div className='footer_div'>
                <center>
                    <div>
                        <img className='footer_logo' src={footer_logo} />
                    </div>
                </center>
                <center>
                    <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
                        <Link className='footer_header_links' to='/'>HOME</Link>
                        <a href = '#top' className = 'top_link'>ABOUT</a>
                        <Link className='footer_header_links' to='/project'>PROJECTS</Link>
                        <Link className='footer_header_links' to='/Contact'>CONTACT</Link>
                    </div>
                </center>
                <center>
                    <span><a href='https://twitter.com/@UmairMa46405132' target='_blank'>
                        <Twitter className='twiter_icons' style={{ fontSize: '40px' }} /></a></span>
                    <span><a href='https://www.facebook.com/profile.php?id=100050903752512' target='_blank'>
                        <Facebook className='facebook_icons' style={{ fontSize: '40px' }} /></a></span>
                    <span><a href='https://instagram.com/umair_rajput977' target='_blank'>
                        <Instagram className='instagram_icons' style={{ fontSize: '40px' }} /></a></span>
                    <span><a href='https://whatsapp.com/Umair😈(Name Tu Suna Hoga)' target='_blank'>
                        <WhatsApp className='whatsapp_icon' style={{ fontSize: '40px' }} /></a></span>
                </center>
                <center style= {{marginTop:'10px'}}>
                    <p style ={{color:'white'}}>Copyright ©2022 All rights reserved | This template is made with ❤ by Colorlib</p>
                </center>
            </div>
        </div>
    )
}

export default About
