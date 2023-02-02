import { useState } from "react"

function Feedbackitem() {
    const [rating, setRating] = useState(7) //Allow to create an attribute (State in React) with it's setter
    const [text, setText] = useState(' This is an example of feedbackitem') 

    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
        </div>
    )
}

export default Feedbackitem