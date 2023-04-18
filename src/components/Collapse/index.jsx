import { useState } from "react";
import "./Collapse.css";
import Arrow from "../Arrow/";

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className="collapse">
            <div className="title" onClick={() => handleClick()}>
                {title}
                <Arrow />
            </div>

            <div className={`description ${isOpen ? "" : "description-active"}`}>{children}</div>
        </article>
    );
}
