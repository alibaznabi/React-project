import React from "react"
import { Grid } from "@material-ui/core"
import './Distribution.css'

export default function Distrbution() {
return (
<div id='distribution'>
<Grid container justifyContent='space-evenly'>
<Grid item lg={9} md={10} xs={11}>
<div>
<div className='disheading'>
<h1>Distribution</h1>
</div>
<div className='distrublogo'>
<img src='./Assets/distrbut.svg'/>
</div>
</div>
</Grid>
</Grid>
</div>
)
}


