import React, { useState } from 'react';
function Card({id,image,info,price,name}){
    const [readmore, setReadmore]=useState(false);
    const description = `${info.substring(0,200)}....`
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    function removeTour(id){
        
    }
    return (
        <div className=" ">
            <img src={image} className="image"></img>
            <div> 
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">{description}
                <span  className="read-more" onClick={readmoreHandler}>{readmore ? `show less`: `read more`}</span>
            </div>
            </div>
           
            <button className="btn-red' onClick={removeTour}>Not Intrested</button>
        </div>

    );
}

export default Card;