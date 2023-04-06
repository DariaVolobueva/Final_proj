import React from "react";

export function Content(){
    return(
        <div className="testimonial-content">
            <div className="primary-text primary-text_position">
                <p className="primary-text__subheader">Testimonial</p>
                <h1 className="primary-text__header">What Our Customer Saying?</h1>
            </div>
            <div className="testimonial-content__testimonial">
                <div className="testimonial-content__avatar"></div>
                <div className="testimonial-content__scores">
                    <div></div><div></div><div></div><div></div><div></div>
                </div>
                <div className="testimonial-content__info">Simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been.</div>
                <div className="testimonial-content__name">Sara Taylor</div>
                <div className="testimonial-content__consumer">Consumer</div>
                <div className="testimonial-content__swiper-circles">
                    <div></div><div></div><div></div>
                </div>
            </div>
        </div>
    );
}