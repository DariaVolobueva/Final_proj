import React from "react";
import { Content } from "./Blog-content";

export function Blog(){
    return(
        <div className="blog blog_position">
            <div className="blog__header">
                <div className="primary-text">
                    <p className="primary-text__subheader">News</p>
                    <h1 className="primary-text__header">Discover weekly content about organic food, & more</h1>
                </div>
                <button className="default-button button-white-border">More News <div></div> </button>
            </div>
            <Content></Content>
        </div>
    );
}