import { useState } from "react";
import "./Slideshow.css";
import Arrow from "../Arrow/";

export default function Slideshow({ picturesArray }) {
    const [index, setindex] = useState(0);

    const imagesNumber = picturesArray.length - 1;

    const navPrevious = () => {
        index > 0 ? setindex(index - 1) : setindex(imagesNumber)
    }

    const navNext = () => {
        index < imagesNumber ? setindex(index + 1) : setindex(0)
    }

    return (
        <div className="slideshowcontainer">
            <div className="navleft" onClick={() => navPrevious()}>
                <Arrow className="arrowleft" />
            </div>

            <img src={`${picturesArray[index]}`} alt="TEST" />

            <div className="navright" onClick={() => navNext()}>
                <Arrow className="arrowright" />
            </div>
        </div>
    );
}
