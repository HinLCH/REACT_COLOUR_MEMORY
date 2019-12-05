import React , { Component } from 'react';

import Grid from '../components/Grid'
import Header from '../components/Header'



class Main extends Component {
    state = {
        score : 0
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
    
    render(){
        const { score } = this.state
        console.log('this',score)
        return(
        <div className='main-mainbody'>
            <Header score={score}/>
            <Grid addScore={this.addScore} loseScore={this.loseScore}/>
        </div>
        )
    }
}

export default Main;
