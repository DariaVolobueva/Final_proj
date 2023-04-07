import React, {useState, useEffect} from "react";
import axios from "axios";
import { Food } from "../tools/food";
import { Modal } from "../tools/modal";

export function Shop(){
    const [foodList, setFoodList] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [modal, setModal] = useState(false);
    const [food, setFood] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:3001/all').then((response) =>{
            setFoodList(response.data); 
        });
    }, [])


    return(
        <>
        <div className="shop shop_position">
            <div className="primary-text primary-text_shop">
                <p className="primary-text__subheader">Categories </p>
                <h1 className="primary-text__header">Our Products</h1>
            </div>
            <div className="shop__blocks">
                <Food foodList={showMore? foodList : foodList.slice(0, 8)}
                        setModal = {setModal}
                        setFood = {setFood}
                ></Food>
            </div>
            <button className="default-button button-blue" onClick={() => setShowMore(!showMore)}>{showMore? "Show less" : "Show more"} <div></div></button>
        </div>
        <Modal 
                modalClose={setModal}
                food = {food}
                isOpen = {modal}
                ></Modal>
        </>
        
    );
}