import { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils/style/Devices";
import colors from "../../utils/style/colors";
import "./Collapse.css";
import Arrow from "../../assets/arrow.svg";

const Picto = styled.span`
    display: block;
    width: 32px;
    height: 30px;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
`;

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className="collapse">
            <div className="title" onClick={() => handleClick()}>
                {title}
                <Picto />
            </div>

            <div className={`description ${isOpen ? "" : "description-active"}`}>{children}</div>
        </article>
    );
}
