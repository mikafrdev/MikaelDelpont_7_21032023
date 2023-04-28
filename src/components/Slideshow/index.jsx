import { useState, useEffect } from "react";
import "./Slideshow.css";
import Arrow from "../Arrow/";
import PropTypes from "prop-types";

export default function Slideshow({ picturesArray }) {
    
    const [index, setindex] = useState(0);
    const [showArrow, setShowArrow] = useState(false);
    const indexMax = picturesArray.length - 1;

    useEffect(() => {
        if (indexMax > 0) setShowArrow(true);
    }, [indexMax]);

    const navPrevious = () => {
        index > 0 ? setindex(index - 1) : setindex(indexMax);
    };

    const navNext = () => {
        index < indexMax ? setindex(index + 1) : setindex(0);
    };

    return (
        <div className="slideshowcontainer">
            {showArrow ? (
                <div className="navleft" onClick={() => navPrevious()}>
                    <Arrow className="arrowleft" />
                </div>
            ) : (
                ""
            )}

            <img src={`${picturesArray[index]}`} alt="TEST" />

            {showArrow ? (<div className="pagination">{index + 1}/{indexMax + 1}</div>) : ("")}

            {showArrow ? (
            <div className="navright" onClick={() => navNext()}>
                <Arrow className="arrowright" />
            </div>
            ) : (
                ""
            )}
        </div>
    );
}

Slideshow.propTypes = {
    picturesArray: PropTypes.arrayOf(PropTypes.string)
};