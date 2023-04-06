import React from "react";

export function Content(){
    return(
        <div className="blog__content">
            <div className="blog-content blog-content_position">
                <div className="blog-content__date"> <span>25</span> Nov</div>
                <div className="blog-content__text">
                    <div className="blog-content__author">
                        <div></div>
                        <p>By Rachi Card</p>
                    </div>
                    <div className="blog-content__theme">
                        <span>The Benefits of Vitamin D & How to Get It</span>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                    <button className="default-button button-yellow">Read More<div></div></button>
                </div>
            </div>
            <div className="blog-content blog-content_position blog-content_second">
                <div className="blog-content__date"> <span>25</span> Nov</div>
                <div className="blog-content__text">
                    <div className="blog-content__author">
                        <div></div>
                        <p>By Rachi Card</p>
                    </div>
                    <div className="blog-content__theme">
                        <span>Our Favourite Summertime Tommeto</span>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                    <button className="default-button button-yellow">Read More<div></div></button>
                </div>
            </div>
        </div>
    );
}