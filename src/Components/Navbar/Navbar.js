import React from 'react'
import {Grid, IconButton} from '@material-ui/core'
import { Typography } from '@material-ui/core'
import './Navbar.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import  {Drawer,Box} from '@material-ui/core'
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Navbar() {
const [isDraweropen, setIsDrawerOpen] =useState(false)
return (
<div id='home'>
<Grid container justifyContent='space-evenly'>
<Grid item lg={12} sm={11} md={10}className='navbarList'>
<div className='navsec'>
    <div className='navimg'>
<img src='./Assets/logo.svg'/>
</div>
<div className='List'>
<Link activeClass="active"
    to="home" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Home
</Link>
<Link activeClass="active"
    to="roadmap" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Roadmap
</Link>
<Link activeClass="active"
    to="distribution" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Distrbution
</Link>
<Link activeClass="active"
    to="team" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Team
</Link>
<Link activeClass="active"
    to="faq" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Faq
</Link>
</div>
<div className='divicon'>
<IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
<MenuIcon className='iconBtn'/>
</IconButton>
</div>
<Drawer anchor='right' open={isDraweropen} on onClose={() =>setIsDrawerOpen(false)} >
<Box p={12} width='270px' textAlign='center' role='presentation'></Box>
<Typography variant='h6' component='div' className='bbbb'>
<div className='sidebarlist'>
<Link activeClass="active"
    to="home" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Home
</Link>
<Link activeClass="active"
    to="roadmap" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Roadmap
</Link>
<Link activeClass="active"
    to="distribution" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Distrbution
</Link>
<Link activeClass="active"
    to="team" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Team
</Link>
<Link activeClass="active"
    to="faq" 
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
Faq
</Link>
</div>
</Typography>
</Drawer>
</div>
</Grid>
</Grid>

{/* /...............////navbar ends here////////////////..........///////// */}
<div className='homesec' id='home'>
<Grid container justifyContent='space-evenly'>
<Grid item xs={11} md={10} lg={9}>
<div className='homeheading'>
<div className='heading'>
<h1>NOTORIOUS<br/> KINGS NFT</h1>
<h5>WE'RE NOT HERE TO TAKE PART, WE ARE HERE TO TAKE OVER!
</h5>
</div>
<div className='para'>
An astonishing 6006 4k 3D NFT collection, <br/>dedicated to the greatest coalition of lions ever<br/> existed granting exclusive rewards and utility for holders.<br/>
<button>JOIN DISCORD</button> <br/>
<div className='icons'>
<InstagramIcon className='insicon'/>
<YouTubeIcon   className='wifiicon'/>
<TwitterIcon className='twitericon'/>
</div>
</div>
</div>
</Grid>
</Grid>
</div>
</div>
)
}

/* /////////////////////home section ends here/////////// */

