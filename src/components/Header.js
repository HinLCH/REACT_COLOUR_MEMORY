import React , { Component } from 'react';


//add high scores (btn in top right)
//logo top left
// user input popup
//high scores table must be displayed as a proper table with three columns: 
//Rank, Name,and Score
class Header extends Component {
    render(){
        const { score } = this.props
        console.log('header props',score)
        return(
        <div className='header-mainbody'>
        Header Score: {score}
        </div>
        )
    }
}

export default Header;