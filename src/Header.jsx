import React from 'react';
import { FlashingStar, ShootingStar, SpinningStar } from './Stars.jsx';
import './scss/main.scss';

const NUMBER_OF_SPINNING_STARS = 6;
const NUMBER_OF_FLASHING_STARS = 40;

function Header(scrollPosition, cursorX, cursorY) {
    return <header class="header">
        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">Tomas</span>
            <span class="heading-primary-sub">McCaffrey</span>
          </h1>
        </div>
        {
          [...Array(NUMBER_OF_FLASHING_STARS)].map( (star, index) => {
            return <FlashingStar number={index} cursorX={cursorX} cursorY={cursorY}/>
          })
        }
        {ShootingStar(scrollPosition)}
    </header>;
}

export default Header;
