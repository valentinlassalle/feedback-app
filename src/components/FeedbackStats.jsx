import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    let average = feedback.reduce((acc, cur) => {return acc + cur.rating}, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '') //put only one decimal -> avoid having 3.956666666 or something like that
    //The replace, replace 0 with nothing if the decimal is 0 (9.0 -> 9)
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}/10</h4>
        </div>
    )
}

FeedbackStats.propTypes= {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats