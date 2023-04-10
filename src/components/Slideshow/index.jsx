import { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils/style/Devices";
import colors from "../../utils/style/colors";
// import "./Slideshow.css";
import Arrow from "../../assets/arrow.svg";

const SlideshowContainer = styled.div`
    display: block;
    width: 335px;
    height: 255px;
    background-color: red;
    border-radius: 10px;
`;

const Picto = styled.span`
    display: block;
    width: 32px;
    height: 30px;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
`;

export default function Slideshow({ title, description }) {
    // const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        // setIsOpen(!isOpen);
    };

    // <div className="title" onClick={() => handleClick()}>
    //             {title}
    //             <Picto />
    //         </div>

    //         <div className={`description ${isOpen ? "" : "description-active"}`}>{description}</div>

    return (
        <SlideshowContainer >
            
        </SlideshowContainer>
    );
}
