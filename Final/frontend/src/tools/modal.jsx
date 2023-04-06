import React, { useState } from "react";
import {renderPrice, renderScore} from "../tools/tools";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export function Modal(props){   
    const [currentInfo, setCurrentInfo] = useState("Product Description");
    const [inputData, setInputData] = useState(0);
    const dispatch = useDispatch();

    function handleAddToCart(food, e){
        e.preventDefault();

        const foodToCart = {
            foodName: food.foodName,
            foodImage: food.image,
            foodPrice: food.price,
            foodDiscount: food.discount,
            amount: parseInt(inputData)
        };
        dispatch(addToCart(foodToCart));
    }

    return(<>{props.isOpen ? 
        <div className={`modal modal_position`}>
            <div className="modal__body">
                <div className="modal__close" onClick={()=>props.modalClose(false)}>X</div>
                <div className="modal__main">
                    <div className="modal__image">
                        <img src={props.food.image} alt="" />
                        <div>
                            {props.food.category}
                        </div>
                    </div>
                    <div className="modal__main-text">
                        <div className="modal__name">{props.food.foodName}</div>
                        <div className="modal__score">
                            {renderScore(props.food.score)}
                        </div>
                        <div className="modal__price">
                            {renderPrice(props.food.discount, props.food.price, "modal")}
                        </div>
                        <div className="modal__main-desk">
                        {props.food.mainInfo}
                        </div>
                        <form className="modal__quantity" onSubmit={(e) => handleAddToCart(props.food, e)}>
                            <label>Quantity :</label>
                            <input type="number" min={1} max={10} onChange={((e) => setInputData(e.target.value))} value={inputData} required/>
                            <button type="submit" className="default-button button-blue">Add To Cart<div></div></button>
                        </form>
                    </div>
                </div>
                <div className="modal__description">
                    <div className="modal__buttons">
                        <button className={currentInfo ==="Product Description" ? 
                                                            "default-button button-light-blue" :
                                                            "default-button button-blue" } 
                                                            onClick={() => {setCurrentInfo("Product Description")}}>Product Description</button>
                        <button className={currentInfo ==="Additional Info" ? 
                                                            "default-button button-light-blue" :
                                                            "default-button button-blue" } 
                                                            onClick={() => {setCurrentInfo("Additional Info")}}>Additional Info</button>
                    </div>
                    <div className="modal__desk-text">{currentInfo ==="Product Description" ? 
                                                                        props.food.productDescription :
                                                                        props.food.additionalInfo }</div>
                </div>
            </div>
        </div>
        : null}</>
    );
}
