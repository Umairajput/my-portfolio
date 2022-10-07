import React from 'react'
import './style.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerAppBar from './navbar'
import footer_logo from './Images/top-images.webp'
import Prog from './progressBar';
import { Link } from 'react-router-dom'
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';

function Project() {
    return (
        <div>
            <div className='container'>
                <div className='main_div'>
                <div className='about_navbar' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '70px'}}>
                        <DrawerAppBar className= "about_nav"/>
                    </div>
                    <div id = 'top'></div>
                    <h1 className='about_us_heading'>PROJECTS</h1>
                    <center>
                    <p className='spn'><Link className='footer_header_links' to='/'>HOME</Link></p>
                        <div className='arrow_icon'><ChevronRightIcon style={{ marginTop: '10px' }} /></div>
                        <p className='spn' style={{cursor:'pointer'}}><b>PROJECTS</b></p>
                    </center>
                </div>
                <div className='fifth_div'>
                    <center>
                        <div>
                            <h1 className='test_heading'>MY PROJECTS</h1>
                        </div>
                    </center>
                    <div className='project_first_div'>
                        <div className='project_cards'><a className='projects_link'
                            href='https://lively-bikes.surge.sh/' target='_blank'>BUDGET CALCULATOR</a></div>
                        <div className='project_cards'><a className='projects_link'
                            href='https://papaya-malasada-b937d0.netlify.app/' target='_blank'>MIND HACK GAME</a></div>
                        <div className='project_cards'><a className='projects_link'
                            href='https://preeminent-manatee-07c1d5.netlify.app/' target='_blank'>DIGITAL <br /> CLOCK</a></div>
                    </div>
                    <div className='project_first_div scnd_div'>
                        <div className='project_cards'><a className='projects_link'
                            href='https://strong-biscochitos-3bdfc3.netlify.app/' target='_blank'>MOBILE PHONE WEBSITE</a></div>
                        <div className='project_cards'><a className='projects_link'
                            href='https://sensational-arithmetic-a618a8.netlify.app/' target='_blank'>JAVASCRIPT CALCULATOR</a></div>
                        <div className='project_cards'><a className='projects_link'
                            href='https://neon-kheer-3e5178.netlify.app/' target='_blank'>POST APP ASSIGNMENT</a></div>
                    </div>
                    <div className='project_first_div scnd_div'>
                        <div className='project_cards'><a className='projects_link'
                            href='https://creepy-meal.surge.sh/' target='_blank'>REACT <br />FORM</a></div>
                        <div className='project_cards'><a className='projects_link'
                            href='https://pricey-bead.surge.sh/' target='_blank'>TODO <br /> APP</a></div>
                        <div className='project_cards'><a className='projects_link'
                            href='https://obnoxious-wave.surge.sh/' target='_blank'>CONTEXT WEBSITE</a></div>
                    </div>
                </div>
                <div className='sixth_div'>
                    <div className='skills_heading_div'><h1>MY SKILLS</h1></div>
                    <div className='progress_bar_div'>
                        <div className='progress_bar'>
                            <div><Prog /></div>
                        </div>
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
                        <a href = '#top' className = 'top_link'>PROJECTS</a>
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
                    <center style={{ marginTop: '10px' }}>
                        <p style={{ color: 'white' }}>Copyright ©2022 All rights reserved | This template is made with ❤ by Colorlib</p>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Project
