import React from 'react'

export default function Scr4() {
    return (
        <div className='scr'>
          <h1>Impressed?</h1>
          <p>Feel free to contact me</p>
          <div className='email'>
            <p>send message directly</p>
            <input placeholder='Email'/>
            <input placeholder='Write your message here...'/>
            <input placeholder=''type='submit' />
          </div>
          <div className='contactlinks'>
            <p>contact me</p>
            <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook" /></a>            
            <a href="https://www.facebook.com" target="_blank"><i className="fa fa-instagram" /></a>            
            <a href="https://www.facebook.com" target="_blank"><i className="fa fa-linkedin" /></a>            
            <a href="https://www.facebook.com" target="_blank"><i className="fa fa-google" /></a> 
            <p>&#169;2021 Sushant Kumar.</p>           
          </div> 
        </div>
    )
}
