import { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils/style/Devices";
import colors from "../../utils/style/colors";
import "./Collapse.css";
import Arrow from "../../assets/arrow.svg";

const Picto = styled.span`
    display: block;
    width: 32px;
    height: 32px;
    background-image: url(${Arrow});
`;

export default function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen (!isOpen);
    };

    return (
        <article className="collapse">
            <div className="title" onClick={() => toggleCollapse()}>
                {title}
                <Picto />
            </div>

            <div className={`description ${isOpen ? '' : 'description-active'}`}>{description}</div>
        </article>
    );
}