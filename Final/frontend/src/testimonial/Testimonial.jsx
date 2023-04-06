import React from "react";
import { Content } from "./Testimonial-content";
import { InfoCircles } from "./Testimonial-info-circles";

export function Testimonial(){
    return(
        <div className="testimonial testimonial_position">
            <div className="testimonial__image testimonial__image_left"></div>
            <div className="testimonial__image testimonial__image_right"></div>
            <Content></Content>
            <div className="line line_position"></div>
            <InfoCircles></InfoCircles>
        </div>
    );
}