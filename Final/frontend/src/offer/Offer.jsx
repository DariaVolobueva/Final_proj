import React, {useState, useEffect} from "react";
import axios from "axios";
import { Food } from "../tools/food";
import { Modal } from "../tools/modal";


export function Offer(){
    const [foodList, setFoodList] = useState([]);
    const [modal, setModal] = useState(false);
    const [food, setFood] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:3001/read').then((response) =>{
            setFoodList(response.data); 
        });
    }, [])

    return(<>
    <div className="offer offer_position">
            <div className="primary-text primary-text_position">
                <p className="primary-text__subheader">Offer</p>
                <h1 className="primary-text__header primary-text__header_offer">We Offer Organic For You</h1>
            </div>
            <div className="offer__blocks">
                <Food foodList={foodList} 
                        setModal = {setModal}
                        setFood = {setFood}></Food>
            </div>
        </div>

        <Modal 
                modalClose={setModal}
                food = {food}
                isOpen = {modal}
                ></Modal>
    </>
        
        
    );
}