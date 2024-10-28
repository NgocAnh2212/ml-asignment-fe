import React from 'react'
import { Link } from "react-router-dom";
import HomePageBased from "../assets/HomepageBg.jpg";
import LogoImg from "../assets/logo.png";
import '../font.css';


const HomePage = () => {
  return (
    <div className="flex w-full h-screen relative" >
      <img src={HomePageBased} alt="Home Page Image" className="absolute bottom-0 left-0 w-4/6 h-4/5" />
      <div className="absolute bottom-0 right-0 w-1/3 h-4/5 opacity-55" style={{background:'linear-gradient(#A86F25 30%,#422C0F 100%)'}}></div>
      <div className="absolute right-28 bottom-32 w-72 h-80 text-3xl gap-x-3" style={{fontFamily:'Italianno'}}>Culinary arts embody cultural heritage, where flavors and presentation blend to create an exquisite experience for those who indulge.</div>
      <Link to = "/menu" className ="absolute right-24 bottom-20 bg-primary-5 rounded-full px-24 py-2 text-2xl font-serif">Learn more</Link>
      <div className="absolute w-full h-1/4 bg-primary-4">
        <img src={LogoImg} alt="logo image" className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-28"/>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 font-serif text-primary-6 text-lg">Satisfy your taste buds with all the delicacies in the world</div>
        <div className="absolute flex flex-row gap-40 top-32 left-1/2 -translate-x-1/2 text-primary-6 text-lg font-serif font-semibold text-nowrap ">
          <Link to ="/">HOME</Link>
          <Link to = "/menu">DAILY MENU</Link>
          <Link to = "/restaurant">RESTAURANT</Link>
          <Link to ="/auth/register">SIGN UP</Link>
          <Link to ="/auth/login">LOG IN</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage