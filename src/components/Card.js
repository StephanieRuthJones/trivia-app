import React from 'react'

class Card extends React.Component {
    state = {
        viewAnswer: false
    }
    showAnswer = () => {
        this.setState({ viewAnswer: !this.state.viewAnswer })
    }

    render() {
        console.log("props", this.props)
        return (
            <div className="card" key={this.props.id}>
                <img src="https://momentohospitality.com.au/hillside-hotel/wp-content/uploads/sites/8/2019/05/Trivia_Tuesdays_Fbnews-1.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Question #: {this.props.id - 1}</h5>
                    <p className="card-text">{this.props.question}</p>
                    {this.state.viewAnswer
                        ? <p>Answer: {this.props.answer}</p>
                        : null}
                    <button onClick={this.showAnswer}>See Answer</button>
                </div>
            </div>
        )
    }
}
export default Card