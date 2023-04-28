import React from "react";
import ArrowSVG from "../../assets/arrow.svg";
import "./Arrow.css";
import PropTypes from "prop-types";

export default function Arrow(props) {
    return (
        <button
            type="button"
            className={props.className}
            style={{backgroundImage: `url(${ArrowSVG})`}}
        ></button>
    );
}

Arrow.propTypes = {
    className: PropTypes.string.isRequired
};

Arrow.defaultProps = {
    className: "arrowup"
};