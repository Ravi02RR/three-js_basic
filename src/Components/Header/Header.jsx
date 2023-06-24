import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import  logo from '../Image/icon.png'
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
    navColor1="white"
    navColor2="hsl(219, 48%, 8%)"
    burgerColor="hsl(54, 100%, 75%)"
      burgerColorHover="hsl(0, 100%, 9%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(54, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="three js"
      link2Text="three js"
      link3Text="three js"
      link4Text="three js"
      link1Url="/"
      link2Url="/"
      link3Url="/"
      link4Url="/"
      link1ColorHover="white"
      link1Color="HSL(54, 100%, 75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(54, 100%, 75%)"
      profileIconColorHover="white"
    
    ></ReactNavbar>
  )
}

export default Header