import React from 'react'
import { Grid } from '@material-ui/core'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Team.css'

export default function Team() {
return (
    <div id='team'>
    <Grid container justifyContent='space-evenly'>
<Grid item lg={9} md={10} xs={11}>
<div>
<div>
    <h1>TEAM</h1>
    <p>Collectively, we have over 50 years of experience in sales, tech, advertising, digital art, development and digital marketing united into a coalition pledged to leave our mark on the Web 3 space. While this is starting out as a niche sector, the evolution has caught the attention and introduced many new individuals to the world of blockchain and cryptocurrencies. We have seen impressive growth in the past few years, and it appears we have only scratched the surface. As early adopters we have the opportunity to reach industry leaders, set trends and influence the future of digital art.</p>
</div>
<div className='kingteam'>
<img src='./Assets/teamking.jpg'/>
</div>
</div>
</Grid>
</Grid>
    </div>
)
}
