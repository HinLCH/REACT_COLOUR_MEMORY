import React , { Component ,Fragment } from 'react';

import Card from './Card'
import Board from './Board'

import initializeDeck from '../util/function'

class Grid extends Component {

    state = {
        flipped : [],
        cards : [],
        selectedID :[],
        disable: false, //disable the board when 2 card are opened
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
        },() =>console.log('disable',this.state.disable))
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
                        console.log('u hv select  2 boxes');
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
        console.log(`flipped[0] ${flipped[0]}`)
        console.log(`flipped 1${flipped[1]}` )
        if ( flipped[0] === flipped[1]){
            console.log('2 are same')
            setTimeout(() => {
                this.setState({
                    flipped: [],
                    selectedID: [],
                    openedCardIds: openedCardIds.concat(selectedID),
                    disable: false,
                })
            }, 1000)
        } else {
            console.log('2 are  not same')
            setTimeout(() => {
                this.setState({
                    flipped: [],
                    selectedID: [],
                    disable: false,
                })
            }, 1000)
        }
    }

    render(){
        const { flipped ,cards , disable, selectedID, openedCardIds} = this.state
        console.log('flippedcard is ',flipped)
        console.log('all cards ',cards)
        const { addScore  , loseScore } = this.props
        // console.log('grid props',[addScore,loseScore])


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