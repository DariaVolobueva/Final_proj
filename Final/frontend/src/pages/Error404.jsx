import React from "react";
import Header from "../header/Header";
import { Footer } from "../footer/Footer";

export function Error404(){
    return(<>
            <Header></Header>
            <div className="error">
                <div className="error__text">
                    <div>404</div>
                    <p>Page not found</p>
                    <span>The page you are looking for doesn't exist or has been moved</span>
                    <a href="/"><button className="default-button button-blue">Go to Homepage <div></div></button></a>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}