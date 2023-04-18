import ArrowSVG from "../../assets/arrow.svg";
import "./Arrow.css";

export default function Arrow() {
    return (
        <button
            type="button"
            className="arrowup"
            style={{backgroundImage: `url(${ArrowSVG})`}}
        ></button>
    );
}
