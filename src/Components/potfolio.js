import React from 'react'
import "./style.css"
import my_pic from './Images/my-pic.jpeg'
import Facebook from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import my_2nd_pic from './Images/Umair.png'
import logo_1 from './Images/card-logo-1.webp'
import logo_2 from './Images/card-logo-2.webp'
import logo_3 from './Images/card-logo-3.webp'
import my_4rth_pic from './Images/my-4rth-pic.png'
import footer_logo from './Images/top-images.webp'
import Prog from './progressBar';
import DrawerAppBar from './navbar';
import Twitter from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'

function Potfolio() {
    return (
        <div>
            <div className='header_navbar_div' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '70px', backgroundColor: 'white' }}>
                {/* <MainNavbar/> */}
                <DrawerAppBar color='black' />
                <div id="top">
                </div>
            </div>
            <div className='upper_div'>
                <div className='first_div'>
                    <p className='first_paragraph'>HEY THERE !</p><br />
                    <h1 className='heading' style={{ marginTop: '-18px' }}>I AM UMAIR</h1>
                    <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#05364d' }}>I AM WEB DEVELOPER</p>
                    {/* <center> */}
                    <div className='icons_div'>
                        <span><a href='https://twitter.com/@UmairMa46405132' target='_blank'>
                            <Twitter className='twiter_icons' style={{ fontSize: '40px' }} /></a></span>
                        <span><a href='https://www.facebook.com/profile.php?id=100050903752512' target='_blank'>
                            <Facebook className='facebook_icons' style={{ fontSize: '40px' }} /></a></span>
                        <span><a href='https://instagram.com/umair_rajput977' target='_blank'>
                            <InstagramIcon className='instagram_icons' style={{ fontSize: '40px' }} /></a></span>
                        <span><a href='https://whatsapp.com/Umair😈(Name Tu Suna Hoga)' target='_blank'>
                            <WhatsAppIcon className='whatsapp_icon' style={{ fontSize: '40px' }} /></a></span>
                    </div>
                    {/* </center> */}
                    {/* <div className='icons_div' >
                        <span><a href='https://twitter.com/@UmairMa46405132' target='_blank'>
                            <Twitter className='twiter_icons' style={{ fontSize: '40px' }} /></a></span>
                        <span><a href='https://www.facebook.com/profile.php?id=100050903752512' target='_blank'>
                            <Facebook className='facebook_icons' style={{ fontSize: '40px' }} /></a></span>
                        <span><a href='https://instagram.com/umair_rajput977' target='_blank'>
                            <InstagramIcon className='instagram_icons' style={{ fontSize: '40px' }} /></a></span>
                        <span><a href='https://whatsapp.com/Umair😈(Name Tu Suna Hoga)' target='_blank'>
                            <WhatsAppIcon className='whatsapp_icon' style={{ fontSize: '40px' }} /></a></span>
                    </div> */}
                    <div className='button_div'>
                        <button className='button'>SEE MY WORK</button>
                    </div>
                    <div className='boxes_div'>
                        <div className='box'>
                            <h2 className='box_heading'><span>15K+</span></h2>
                            <p className='box_paragraph'>Happy Customer</p>
                        </div>
                        <div className='box'>
                            <h2 className='box_heading'><span>12K+</span></h2>
                            <p className='box_paragraph'>Ticket Solved</p>
                        </div>
                        <div className='box'>
                            <h2 className='box_heading'><span>9/10</span></h2>
                            <p className='box_paragraph'>Average Rating</p>
                        </div>
                    </div>
                </div>
                {/* <div className='image_div'> */}
                <img src={my_pic} className="image_1" />
                {/* </div> */}
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
            <div className='third_div'>
                <div className='service_div'>
                    <h3 style={{ color: '#05364d' }}>OUR SERVICE</h3>
                    <h1 className='service_heading'>What Service We <br />Offer For You</h1>
                </div>
                <div className='cards_div'>
                    <div className='card'>
                        <img className='card_logo' src={logo_1} />
                        <h3 className='card_heading'>Web Development</h3>
                        <p>Fruit saw for brought fish forth had ave is man<br />
                            a that their Two he is dominion evening their <br />
                            Fruit saw for brought fish forth</p>
                        <h5 className='card_footer_heading'>Learn More</h5>
                        <center><div className='color_div'></div></center>
                    </div>
                    <div className='card'>
                        <img className='card_logo' src={logo_2} />
                        <h3 className='card_heading'>UX/UI Design</h3>
                        <p>Fruit saw for brought fish forth had ave is man<br />
                            a that their Two he is dominion evening their <br />
                            Fruit saw for brought fish forth</p>
                        <h5 className='card_footer_heading'>Learn More</h5>
                        <center><div className='color_div'></div></center>
                    </div>
                    <div className='card'>
                        <img className='card_logo' src={logo_3} />
                        <h3 className='card_heading'>WP Developing</h3>
                        <p>Fruit saw for brought fish forth had ave is man<br />
                            a that their Two he is dominion evening their <br />
                            Fruit saw for brought fish forth</p>
                        <h5 className='card_footer_heading'>Learn More</h5>
                        <center><div className='color_div'></div></center>
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
            <div className='fifth_div'>
                <center>
                    <div>
                        <h1 className='test_heading'>MY PROJECTS</h1>
                    </div>
                </center>
                <div className='cards_div'>
                    <div className='card'>
                        <img className='card_logo' src={logo_1} />
                        <div className='project_cards'><a className='projects_link'
                            href='https://lively-bikes.surge.sh/' target='_blank'>
                            <p className='projects_link'>BUDGET <br /><br /> CALCULATOR</p></a></div>
                    </div>
                    <div className='card'>
                        <img className='card_logo' src={logo_2} />
                        <div className='project_cards'><a className='projects_link'
                            href='https://papaya-malasada-b937d0.netlify.app/' target='_blank'>
                            <p className='projects_link'>MIND HACK<br /><br />GAME</p></a></div>
                    </div>
                    <div className='card'>
                        <img className='card_logo' src={logo_3} />
                        <div className='project_cards'><a className='projects_link'
                            href='https://preeminent-manatee-07c1d5.netlify.app/' target='_blank'>
                            <p className='projects_link'>DIGITAL<br /><br />CLOCK</p></a></div>
                    </div>
                </div>
                {/* <div className='project_first_div'>
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
                </div> */}
            </div>
            <div className='sixth_div'>
            <div className='skills_heading_div'><h1>MY SKILLS</h1></div>
                <div className='skills_and_contact_div'>
                    <div className='progress_bar_div'>
                        <div className='progress_bar'>
                            <div><Prog /></div>
                        </div>
                    </div>
                    {/* <div>
                        <div className='contact_heading_div'><h1>CONTACT</h1></div>
                        <div className='contact_div'>
                        <p>NAME : <input type='text' placeholder = 'Enter your name'/></p>
                        <p>EMAIL : <input type = 'email' placeholder='Enter your email'/></p>
                        <p>PASSWORD : <input type='password' placeholder = 'Enter your Password'/></p>
                        </div>
                    </div> */}
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
                        <a href='#top' className='top_link'>HOME</a>
                        <Link className='footer_header_links' to='/about'>ABOUT</Link>
                        <Link className='footer_header_links' to='/project'>PROJECTS</Link>
                        <Link className='footer_header_links' to='/Contact'>CONTACT</Link>
                    </div>
                </center>
                {/* <nav className='navbar'>
                    <a className='footer_navbar_links' href='#'>HOME</a>
                    <a className='footer_navbar_links' href='#'>ABOUT</a>
                    <a className='footer_navbar_links' href='#'>PROJECTS</a>
                    <a className='footer_navbar_links' href='#'>CONTACT</a>
                </nav> */}
                <center>
                    <span><a href='https://twitter.com/@UmairMa46405132' target='_blank'>
                        <Twitter className='twiter_icons' style={{ fontSize: '40px' }} /></a></span>
                    <span><a href='https://www.facebook.com/profile.php?id=100050903752512' target='_blank'>
                        <Facebook className='facebook_icons' style={{ fontSize: '40px' }} /></a></span>
                    <span><a href='https://instagram.com/umair_rajput977' target='_blank'>
                        <InstagramIcon className='instagram_icons' style={{ fontSize: '40px' }} /></a></span>
                    <span><a href='https://whatsapp.com/Umair😈(Name Tu Suna Hoga)' target='_blank'>
                        <WhatsAppIcon className='whatsapp_icon' style={{ fontSize: '40px' }} /></a></span>
                </center>
                {/* <di className='icon_div'>
                    <div className='icon'><TwitterIcon style={{ fontSize: '40px' }} /></div>
                    <div className='icon'><Facebook style={{ fontSize: '40px' }} /></div>
                    <div className='icon'><Instagram style={{ fontSize: '40px' }} /></div>
                    <div className='icon'><WhatsApp style={{ fontSize: '40px' }} /></div>
                </di> */}
                <center style={{ marginTop: '30px' }}>
                    <p style={{ color: 'white' }}>Copyright ©2022 All rights reserved | This template is made with ❤ by Colorlib</p>
                </center>
            </div>
        </div>
    )
}

export default Potfolio
