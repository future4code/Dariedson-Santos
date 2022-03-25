import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="small-container">
            <div>
                <h4>{ props.textoo }</h4>
                <h5>{props.texto}</h5>
                
            </div>
        </div>

        
    

        
    )
}

export default CardPequeno;