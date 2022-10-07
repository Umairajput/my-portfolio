import React from 'react'
import './style.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerAppBar from './navbar'
import footer_logo from './Images/top-images.webp'
import { Link } from 'react-router-dom'
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';

function Contact() {
    return (
        <div>
            <div className='container'>
            <div id = 'top'></div>
                <div className='main_div'>
                    <div className='about_navbar' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '70px'}}>
                        <DrawerAppBar className= "about_nav"/>
                    </div>
                    <h1 className='about_us_heading'>CONTACT US</h1>
                    <center>
                    <p className='spn'><Link className='footer_header_links' to='/'>HOME</Link></p>
                        <div className='arrow_icon'><ChevronRightIcon style={{ marginTop: '10px' }} /></div>
                        <p className='spn' style={{cursor:'pointer'}}><b>CONTACT</b></p>
                    </center>
                </div>
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
                        <Link className='footer_header_links' to='/about'>ABOUT</Link>
                        <Link className='footer_header_links' to='/project'>PROJECTS</Link>
                        <a href = '#top' className = 'top_link'>CONTACT</a>
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
                <center style={{ marginTop: '10px' }}>
                    <p style={{ color: 'white' }}>Copyright ©2022 All rights reserved | This template is made with ❤ by Colorlib</p>
                </center>
            </div>
        </div>
    )
}

export default Contact
