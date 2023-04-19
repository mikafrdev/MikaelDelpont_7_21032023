import React from "react";
import ArrowSVG from "../../assets/arrow.svg";
import "./Arrow.css";

export default function Arrow(props) {
    return (
        <button
            type="button"
            className={props.className}
            style={{backgroundImage: `url(${ArrowSVG})`}}
        ></button>
    );
}
