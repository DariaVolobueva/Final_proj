import React from "react";
import { Natural } from "./OfferBanner-natural";
import { Offer } from "./OfferBanner-offer";

export function OfferBanner(){
    return(
        <div className="offer-banner offer-banner_position">
            <Natural></Natural>
            <Offer></Offer>
        </div>
    );
}