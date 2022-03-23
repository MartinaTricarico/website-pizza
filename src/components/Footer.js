import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon/><FacebookIcon/><TwitterIcon/><LinkInIcon/>
            </div>
            <p>copyright: 2022 martina tricarico</p>
        </div>
    )
}

export default Footer;
