import React , { Component ,Fragment } from 'react';

import Card from './Card'
import Board from './Board'

import {initializeDeck} from '../util/function'

class Grid extends Component {

    state = {
        flipped : [],
        cards : [],
        selectedID :[],
        //before disable the board when 2 card are opened
        //now disable the board when all card are opened
        disable: false, 
        openedCardIds: [],
    }

    componentDidMount () {
        //get the randomized card first
        let initializeCards = initializeDeck() 
        this.setState({
            cards: initializeCards
        })
    }

    setDisable = (bool) => {
        this.setState({
            disable : bool
        })
    }

    handleClick = (type , id ) => {
        const { selectedID ,flipped } = this.state
        if (selectedID.includes(id)) {
            return;
        } else {
            if ( flipped.length < 2) {
                this.setState((prevState) => ({
                    flipped : [...prevState.flipped , type] , 
                    selectedID : [...prevState.selectedID , id],
                }), () => {
                    if ( this.state.flipped.length == 2 ) {
                        this.setDisable(true);
                        this.checkPair();
                    }
                });
            }
        }
    }

    //check if 2 boxes are same
    checkPair = () => {
        const { flipped,openedCardIds, selectedID } = this.state;
        const { addScore  , loseScore , endGame} = this.props
        if ( flipped[0] === flipped[1]){
            //when there is a pair
            setTimeout(() => {
                this.setState({
                    flipped: [],
                    selectedID: [],
                    openedCardIds: openedCardIds.concat(selectedID),
                    disable: false,
                } , () => {
                    addScore()
                    if ( this.state.openedCardIds.length === 16 ) {
                        endGame()
                    }
                })
             
            }, 1000)
        } else {
            setTimeout(() => {
                this.setState({
                    flipped: [],
                    selectedID: [],
                    disable: false,
                })
                loseScore()
            }, 1000)
        }
    }

    render(){
        const { flipped ,cards , disable, selectedID, openedCardIds} = this.state
        console.log('all cards ',cards) // get all hidden cards for testing
        return(
        <Fragment>
            <Board
                cards={cards}
                flipped={selectedID}
                handleClick={this.handleClick}
                disable={disable}
                openedCardIds={openedCardIds}
                />
        </Fragment>
        )
    }
}

export default Grid;