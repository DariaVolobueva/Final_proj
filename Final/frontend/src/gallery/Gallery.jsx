import React from "react";

export function Gallery(){
    return(
        <div className="gallery gallery_position">
            <div className="gallery__first">
                <button className="default-button button-white">Organic Juice</button>
            </div>
            <div className="gallery__second">
                <button className="default-button button-white">Organic Food</button>
            </div>
            <div className="gallery__third">
                <button className="default-button button-white">Nuts Cookis</button>
            </div>
        </div>
    );
}