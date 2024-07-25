import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { red } from "@mui/material/colors";
export default function Hed(){
    return(
        <div class="Hed">
        <div class="Hed1">
          <h1> <AcUnitIcon style={{"fontSize":"40px"}}/> 
            <span style={{"color":"red"}}>PR</span>yoga
          </h1>
        </div>
        <div class="Hed2">
          <h4>
            CALL US + 1800-456-5432. EMAILID- prokade260@gmail.com MON-FRI
            9:00-19:00
          </h4>
        </div>
        <div class="Hed3">
          <button>
            JOIN US
          </button>
        </div>
      </div>

    )
}