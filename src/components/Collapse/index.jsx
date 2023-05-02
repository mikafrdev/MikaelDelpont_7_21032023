import { useState } from "react";
import "./Collapse.css";
import Arrow from "../Arrow/";
import PropTypes from "prop-types";

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className="collapse">
            <div className="title" onClick={() => handleClick()}>
                {title}
                <Arrow className={`arrowdown ${isOpen ? "arrowup" : ""}`} />
            </div>

            <div className={`description ${isOpen ? "description-active" : ""}`}>{children}</div>
        </article>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};