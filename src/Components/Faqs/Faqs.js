import React from 'react'
import {Grid}from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Faqs.css'

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    },
    heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();
return (
    <div className='Faqssec' id='faq'>
    <Grid container justifyContent='space-evenly'>
    <Grid item lg={9} md={10} xs={11}>
    <div className='faqheading'>
        <h1>FAQ</h1>
    </div>
    <div className='faqsheading'>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>WHAT IS NOTORIOUS KINGS NFT?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        Notorious Kings NFT is an astonishing 3D project which consists of 6006 unique collectibles. It presents itself as a dedication to the greatest coalition of lions that ever existed.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>HOW CAN I OWN A NK NFT?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
            NOTORIOUS KINGS NFT will be available for purchase through an initial sale on our website. A randomly selected NFT will be minted on the blockchain and given to your wallet and OpenSea account at the moment of purchase.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>WHAT TYPE OF DIGITAL WALLET SHOULD I USE FOR TRANSACTIONS?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        The most widely used NFT digital wallet is MetaMask. Ethereum and ERC20 can be stored, sent, and received using MetaMask, a browser extension that can be installed on Chrome, Firefox, and Brave. Having a wallet provides you with a unique Ethereum address (i.e. 0xABCD….1234), it is also the location of your NFT.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>THIS SOUNDS COOL. HOW DO I GET INVOLVED?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        You may start by joining our Discord, which is home to a large and active community of Notorious Kings fans. Join us even if you don't have a NOTORIOUS KINGS NFT! Everyone is welcome to join in on the discussion, share their thoughts, and socialize with others who share their passion for lions.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>WHY SHOULD I BUY A NOTORIOUS KING NFT?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        Reason 1: The art quality of the collectibles surpasses by far similar collections. The nature of the 3D art is capable of pushing this project to a BLUE CHIP status. Reason 2: The direct rewarding program for the community (collection items, luxurious safari, sports car raffle, and more). Reason 3: The direct helping program to the cause of LIONS (meals for LIONS programme, contribution to the Lion Recovery Fund, yearly continuous contributions to support species conservation). Reason 4: Owning a Notorious Kings NFT collectible will serve as a minting pass for the next 2 (two) projects. Reason 5: Owning qualitative NFTs at the very early stages of the massive digital revolution is a key in making huge profits in the mid term, as in the next year this market will be way, way bigger.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>HOW IS NOTORIOUS KINGS NFT DIFFERENT FROM OTHER COLLECTIONS?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        NOTORIOUS KINGS NFT is the first 3D lion avatar collection on the Ethereum blockchain which stands by real lion characters that wrote real history pages. It is also the first collection providing utility to the community, and the preservation of lions alike. For many, all lions are the same, however the avatars of the six kings have been recreated by 3D artists underlying quality and character differentiation, making them unique pieces.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>WHAT IS THE UTILITY?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        Owning a Notorious Kings NFT will provide owners with the following: Ø short list to free item drop once collection is sold out Ø short list for Luxurious Safari Packages Ø shortlist for Sports Car Ø fast track mint for the next 2 INSPIRATIVE-DIGITAL collections Ø more surprises
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>HOW MUCH DOES IT COST TO MINT A NOTORIOUS KING NFT?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        WHITELIST MINT PRICE: 0.2 ETH + GAS PUBLIC MINT PRICE: TBA
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>HOW MANY NOTORIOUS KINGS NFT CAN I MINT?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        WHITELIST (3) / PUBLIC SALE (TBA)
        </Typography> 
        </AccordionDetails>
    </Accordion>
    
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>LAUNCH</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        WHITELIST MINT 23th JUNE 2022, 21:00 CET / 15:00 ET
        </Typography> 
        </AccordionDetails>
    </Accordion>
    
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>HOW CAN I REGISTER FOR THE RAFFLES?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        Join our Discord community, join our mailing list, and visit our website to register for raffles and be in on the latest news. Please be aware that you need enough funds in your wallet to mint at least 1 NK NFT.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>HOW DO I KNOW IF I WON THE RAFFLE?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        Please visit our website (after the whitelist sale) and connect your MetaMask account to see if you`ve won. If you win the raffle, you will be able to mint right away.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>HOW WILL RARITY BE DETERMINED?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        Each Notorious Kings NFT is 100% unique and is programmatically generated from 150 + hand drawn traits. We will share our Rarity Sheet shortly after the reveal.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    <Accordion >
        <div className='mmmm'>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography variant='h6'>WHEN IS THE REVEAL?</Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className='typo1'>
        <Typography >
        The date is yet to be announced, join our Discord so you don’t miss out on any NK NFT news.
        </Typography> 
        </AccordionDetails>
    </Accordion>
    </div>
    </Grid>
    </Grid>


    {/* /////////////////Faqs ends here......./////////// */}


    <div  >
        <Grid container justifyContent='space-evenly'>
        <Grid item lg={9} md={10} xs={11}>
        <div>
            <h1>PRESSABOUTUS</h1>
        </div>
        <div className='coins'>
        <div>
        <img className='icon' src='./Assets/crypto.png'/>
        <p>Crypto<br/>Reportage</p>
        </div>
        <div>
        <img  src='./Assets/bitcoin.png'/>
        <p>BinBits</p>
        </div>
        <div>
        <img  src='./Assets/coin.png'/>
        <p>Coin<br/>Speaker</p>
        </div>
        </div>
        <div className='pressabout'>
        <img src='./Assets/pressabout.jpg'/>
        </div>
        </Grid>
        </Grid>
    </div>
    </div>
)
}
