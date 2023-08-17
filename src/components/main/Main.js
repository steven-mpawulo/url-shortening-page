import React from 'react'
import Button from '../common/button/Button'
import IllustrationWorking  from '../../images/illustration-working.svg'
import './main.css'

const Main = () => {
  return (
    <main>
        <section className='first-section'>
            <div className="first-section-left-container">
                <h1>More than just <span>shorter links</span></h1>
                <p>Build your brands recognition and get detailed <span>insights on how your links are performing</span></p>
                <Button buttonText={"Get Started"} border={"2px solid hsl(180, 66%, 49%)"} backgroundColor={"hsl(180, 66%, 49%)"} color={"white"} borderRadius={"25px"}/>
            </div> 
            <div className="first-section-right-container">
                <img src={IllustrationWorking} alt="illustration-hero" className='illustration-hero'/>
            </div>
        </section>
    </main>
  )
}

export default Main