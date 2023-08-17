import React from 'react'
import Button from '../common/button/Button'
import IllustrationWorking  from '../../images/illustration-working.svg'
import './main.css'
import Card from '../common/card/Card'
import brandRecognitionIcon from '../../images/icon-brand-recognition.svg'

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
        <section className='second-section'>
            <div className="wrapper">
                <input type="text" placeholder='Shorten a link here...' />
                <Button buttonText={"Shorten It!"} border={"2px solid hsl(180, 66%, 49%)"} backgroundColor={"hsl(180, 66%, 49%)"} color={"white"} borderRadius={"10px"}/>
            </div>
        </section>
        <section className='third-section'>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with <span>
                our advanced statistics dashboard.</span></p>
        </section>
        <section className='fourth-section'>
            <div className="container-for-cards">
            <Card icon={brandRecognitionIcon}  title= {"Brand Recognition"} message={"Boost your brand recognition with each click"} />
            <div className="card-separation">
            </div>
            <Card icon={brandRecognitionIcon}  title= {"Brand Recognition"} message={"Boost your brand recognition with each click"} />
            <div className="card-separation">
            </div>
            <Card icon={brandRecognitionIcon}  title= {"Brand Recognition"} message={"Boost your brand recognition with each click"} />
            </div>
        </section>
    </main>
  )
}

export default Main