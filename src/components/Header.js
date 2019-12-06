import React , { Component } from 'react';
import { Button } from '@material-ui/core';
import ScoreBoardDialog from '../components/ScoreBoardDialog';


//add high scores (btn in top right)
//logo top left
// user input popup
//high scores table must be displayed as a proper table with three columns: 
//Rank, Name,and Score
class Header extends Component {

    state = {
        scoreBoardDialogOpen : false,
    }

    OpenScoreBoardDialog = () => {
        this.setState({
            scoreBoardDialogOpen : true,
         })
    }

    CloseScoreBoardDialog = () => {
        this.setState({
            scoreBoardDialogOpen : false,
         })
    }

    render(){
        const { score } = this.props
        const { scoreBoardDialogOpen }  = this.state
        return(
        <div className='header-mainbody'>
            <div className='header-icon-container'>
                ICON
            </div>
            <div className='header-score-container'>
                Score: {score}
            </div>
            <Button onClick={()=>this.OpenScoreBoardDialog()}>
                Score Board
            </Button>
            <ScoreBoardDialog open={scoreBoardDialogOpen} onClose={this.CloseScoreBoardDialog}/>
        </div>
        )
    }
}

export default Header;