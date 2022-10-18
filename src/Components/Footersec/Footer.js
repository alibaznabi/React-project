import { Grid } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Footer() {
return (
    <div>
    <Grid container justifyContent='space-evenly'>
    <Grid item lg={12} md={10} xs={11}>
        <div className='bodertop'></div>
    <div className='footerhead'>
    <div className='footersec'>
    <img src='./Assets/logo.svg'/>
    <p>Powerd by</p>
    <img src='./Assets/footer.png'/>
    </div>
    <div className='Atag'>
    <a href=''>Home</a> <br/>
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
<br/>
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
Distribution
</Link>
<br/>
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
<br/>
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
    <div className='footerbtn'>
    <button className='footer_btn'>JOIN DISCORD</button> <br/>
    <button>Twitter</button> <br/>
    <button>Instagram</button> <br/>
    <button>TIK TOK</button> <br/>
    <button>OPENSEA</button> <br/>
    </div>
    </div>
    </Grid>
    </Grid>


    {/* ............../////////////////////////////////// */}
    <div className='main'>
    <Grid container justifyContent='space-evenly'>
    <Grid item lg={12} md={10} xs={11}>
    <div className='lastsec'>
        <p>2022 Notorious Kings NFT.All rights reserved</p>
        <h4>Terms and Conditions</h4>
    </div>
    </Grid>
    </Grid>
    </div>
    </div>
)
}
