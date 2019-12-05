import React , { Component } from 'react';



class Card extends Component {
    render(){
        const {
            handleClick,
            id,
            flipped,
            type,
            disable
        } = this.props
        return(
        <div className='card-mainbody'>
            <div 
                className={`flip-container ${flipped ? 'flipped' : '' }`}
                onClick={() => disable ? null : handleClick(type)}
            >
                <div className="flipper">
                    <div 
                    className={flipped ? `front ${type}` : 'back'}
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default Card;