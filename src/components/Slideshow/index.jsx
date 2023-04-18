import { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../utils/style/Devices";
import colors from "../../utils/style/colors";
// import "./Slideshow.css";
import Arrow from "../../assets/arrow.svg";

const SlideshowContainer = styled.div`
    position: relative;
    display: block;
    width: 335px;
    height: 255px;
    border-radius: 10px;
    overflow: hidden;

    & img {
        width: 335px;
        height: 255px;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const PictoLeft = styled.button`
    position: absolute;
    top: 45%;
    display: block;
    width: 32px;
    height: 30px;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    transform: rotate(90deg);
    border: 0;
    background-color: transparent;
    cursor: pointer;
`;

const PictoRight = styled(PictoLeft)`
    right: 0;
    transform: rotate(-90deg);
`;

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
        <SlideshowContainer>
            <PictoLeft onClick={() => navPrevious()} />
            <img src={`${picturesArray[index]}`} alt="TEST" />
            <PictoRight onClick={() => navNext()} />
        </SlideshowContainer>
    );
}
