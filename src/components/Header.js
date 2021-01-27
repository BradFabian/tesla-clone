import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg'
const Header = () => { return(
<div className='header'>
<div className='header__logo'>
    <img src={TeslaLogo} alt='Tesla Logo'/>

</div>

<ul className="header__center">
<li>Model S</li>
<li>Model 3</li>
<li>Model X</li>
<li>Model Y</li>
<li>Solar Roof</li>
<li>Solar panel</li>
</ul>

<ul className="header__right">
<li>Shop</li>
<li>Tesla Account</li>

</ul>
</div>
)
}

export default Header