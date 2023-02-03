import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import {useState} from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackFrom from "./components/FeedbackFrom"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete ?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }      
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) //with this syntax, we use spread operator (...) to indicate that feedback is a iterative object, then we add newfeedback before all
        // with [...feedback , newFeedback] we can add at the END. The spread syntax has to be before the variable 
    }
    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackFrom handleAdd={addFeedback}/> {/* we're sending a method as a parameter that will be calledc in FeedbackForm*/}
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
            </div>
        </>
    )

}

export default App