import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Pic(){
    return(
        <div class="Pic">
        <div class="Pn1">
          <ul>
            <li><a href="#" id="p">HOME</a></li>
            <li><a href="#pa" id="p">ABUOT</a></li>
            <li><a href="#pr" id="p">CLASSES</a></li>
            <li><a href="#pt" id="p">PAGES</a></li>
            <li><a href="#ps" id="p">CONTACT</a></li>
          </ul>
        </div>
        <div class="Pn2" id="ick">
          <ul>
            <li> <FacebookIcon/></li>
            <li>  <InstagramIcon/></li>
            <li>  <GitHubIcon/></li>
            <li> <TwitterIcon/></li>
          </ul> 
        </div>
        
        <div className="Pn3">
        <h4>WELCOME TO PRyoga</h4>
        <h1>
          What hurts today makes you stronger tomorrow
        </h1>
        </div>
        <div className="Pn4">
        <button >
          DISCOVER MORE
        </button>
        </div>
      </div>
    )
}