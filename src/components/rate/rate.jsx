import react from "react"
import "./rate.css"
import { useState } from "react"

export default function Rate({setSubmit, rate, setRate}) {
    const buttons = [1, 2, 3, 4, 5]

    console.log(rate)

    return (
        <div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request.
                all feedback is appreciated to help us improve our offering!
            </p>

            <div className="submitForm">

            <div className="buttonSection">
            {buttons.map(item => (
                <button key={item} 
                onClick={() => setRate(item)} 
                style={ {backgroundColor: rate == item ? "orange" : ""}}>{item}</button>
            ))}    
            </div>

            <button className="submitButton" onClick={() => rate && setSubmit(true)}>submit</button>
            </div>
        </div>
    )
}