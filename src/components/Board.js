import React , { Component } from 'react'

import Card from './Card'

class Board extends Component {

    handleCardClick = (type  ,  id )  => {
        const {handleClick} =this.props
        handleClick(type ,id)
    }

    render (){
        const { 
            cards,        
            flipped,
            disable,
            openedCardIds,
            } = this.props
        return(
            <div className="board-mainbody">
                {
                    cards.map((card,i) => (
                    <Card 
                        key={card.id}
                        id={card.id}  
                        type={card.type}
                        width={100}
                        height={100}
                        //check is flipped or not 
                        flipped={flipped.includes(card.id) || openedCardIds.includes(card.id)} 
                        //
                        handleClick={() => this.handleCardClick(card.type, card.id)} 
                        disable={disable || openedCardIds.includes(card.id)}
                    />
                    ))}
            </div>
        )
    }

}

export default Board;