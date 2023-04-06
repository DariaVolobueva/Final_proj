import React from "react";

export function Newsletter(){
    return(
        <div className="newsletter newsletter_position">
            <div className="newsletter-block newsletter-block_position">
                <div className="newsletter-block__text">Subscribe to our Newsletter</div>
                <div className="newsletter-block__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button className="default-button button-blue">Subscribe</button>
                </div>
            </div>
        </div>
    );
}