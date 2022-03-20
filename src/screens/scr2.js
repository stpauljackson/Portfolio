import React from 'react'
import Card from '../Card'

export default function Scr2() {
    return (
        <div className='scr'>
          <div className="container">
            <h1 id="skills" >SKILLS</h1>
            <p id="skills_subheading">Some of the tools I use to bring Ideas to life</p>
            <div className="card_container">
              <Card img='react.svg' heading='React JS' exp='1 year'/>
              <Card img='react.svg' heading='Node JS' exp='1 year'/>
              <Card img='react.svg' heading='MongoDB' exp='1 year'/>
              <Card img='react.svg' heading='React Native' exp='1 year'/>
              <Card img='react.svg' heading='Machine Learning' exp='1 year'/>
              <Card img='react.svg' heading='C++' exp='1 year'/>
              <Card img='react.svg' heading='Python' exp='1 year'/>              
              <Card img='react.svg' heading='Javascript' exp='1 year'/>
            </div> 
          </div> 
        </div>
    )
}
