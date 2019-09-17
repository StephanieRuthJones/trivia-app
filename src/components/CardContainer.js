import React from 'react'
import Card from './Card'

class CardContainer extends React.Component {
    state = {
        triviaQuestions: []
    }

    componentDidMount() {
        fetch('http://jservice.io/api/clues')
            .then(response => response.json())
            .then(triviaQuestions => this.setState({ triviaQuestions }))
    }

    // 

    render() {
        console.log("state", this.state.triviaQuestions)
        const triviaCards = this.state.triviaQuestions.map(trivia => {
            return <Card question={trivia.question} answer={trivia} id={trivia.id}/>
        })
        return (
            <div>
                {triviaCards}
            </div>

        )
    }
}
export default CardContainer