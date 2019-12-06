import React , { Component } from 'react';

import Grid from '../components/Grid'
import Header from '../components/Header'
import ScoreFormDialog from '../components/ScoreFormDialog'

class Main extends Component {
    state = {
        score : 0,
        gameFinish : false,
        scoreFormDialogOpen : false,
      }

    addScore = () => {
        this.setState((prevState) => ({
            score : prevState.score + 5
        }))
    }

    loseScore = () => {
        this.setState((prevState) => ({
            score : prevState.score - 1
        }))
    }

    endGame = () => {
        this.setState({
            gameFinish : true,
            scoreFormDialogOpen : true,
         })
    }

    closeScoreDialogOpen = () => {
        this.setState({
            scoreFormDialogOpen : false,
        })
    }


    
    render(){
        const { score , gameFinish , scoreFormDialogOpen } = this.state
        return(
        <div className='main-mainbody'>
            <Header score={score} gameFinish={gameFinish}/>
            <Grid addScore={this.addScore} loseScore={this.loseScore} endGame={this.endGame}/>
            <ScoreFormDialog open={scoreFormDialogOpen} onClose={this.closeScoreDialogOpen} score={score}/>
        </div>
        )
    }
}

export default Main;
