import React from 'react'
import Profile from './Profile'
import LeftMenu from './LeftMenu';
import '../Resources/StyleSheet/Profile.css'

function About() {
  return (
    <>
        <div className='row m-5 lg:flex md:block justify-around about-me about'>
          
            <div className='col-lg-4 left-menu justify-content'>
                <LeftMenu/>
            </div>
            <div className='col-lg-8 p-2 right-menu'>
                <Profile></Profile>
            </div>
        </div>
    </>
  )
}

export default About