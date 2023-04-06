import React from "react";

export function renderPrice(discount, price, blockname){
    if(discount > 0 && !(discount === undefined)){
        return (<>
            <div className={`${blockname}__old-price`}>${price.toFixed(2)}</div>
            <div className={`${blockname}__new-price`}>${(price - discount).toFixed(2)}</div>
        </>)
    } else{
        return (<div className={`${blockname}__new-price`}>${price.toFixed(2)}</div>)
    }
}

export function renderScore(score){
    let content = [];

    for(let i = 0; i < score; i++){
        content.push(<div key={i}></div>);
    }

    return content;
}
