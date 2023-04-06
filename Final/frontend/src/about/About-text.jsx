import React from "react";

export function Text(){
    return(
        <div className="about__text-block about__text-block_position">
            <div className="primary-text primary-text_position">
                <p className="primary-text__subheader">About Us</p>
                <h1 className="primary-text__header">We Believe in Working
                                                        Accredited Farmers</h1>
            </div>
            <div className="secondary-text secondary-text_position">
                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className="block block_position">
                    <div className="block__square">
                        <div className="block__circle"></div>
                        <div className="block__image"></div>
                    </div>
                    <div className="block__text">
                        <span>Organic Foods Only</span>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <div className="block">
                    <div className="block__square">
                        <div className="block__circle block__circle_position"></div>
                        <div className="block__image block__image_second"></div>
                    </div>
                    <div className="block__text">
                        <span>Quality Standards</span>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <div className="block block__second"></div>
            </div>
            <button className="default-button button-blue">Shop Now<div></div></button>
        </div>
    );
}