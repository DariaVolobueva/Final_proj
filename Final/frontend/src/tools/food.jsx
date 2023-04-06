import React from "react";
import { renderPrice, renderScore} from "../tools/tools";



export function Food({foodList, setModal, setFood}){

    function handleClick(val){
        setModal(true); 
        setFood(val);
    }
    
    return (<>
        {foodList.map((val) => {
            return <div key={val.foodName} className="food-block" data-tag={val.foodName} onClick={event => handleClick(val)}> 
                        <div className="food-block__category">{val.category}</div> 
                        <img src={val.image} alt="" />
                        <div className="food-block__text">
                            <p className="food-block__name">{val.foodName}</p>
                            <div className="food-block__hr"></div>
                            <div className="food-block__bottom">
                                <div className="food-block__price">
                                    {renderPrice(val.discount, val.price, "food-block")}
                                </div>
                                <div className="food-block__score">
                                    {renderScore(val.score)}
                                </div>
                            </div>
                        </div>
                    </div>
        })}
        </>
    )
}