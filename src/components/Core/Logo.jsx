import React from 'react';
import LogoImg from '../../assets/images/logo/logo2.png';

const Logo = () => {
  return (
    <div className='flex gap-2 align-middle'> 
      <img src={LogoImg} alt="" className="w-11 h-11" /> 
    </div>
  )
}

export default Logo