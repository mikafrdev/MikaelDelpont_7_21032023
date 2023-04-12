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

const images = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
]

export default function Slideshow({ iimages }) {
    const [index, setindex] = useState(0);
    
    useEffect(() => {

    }, []);


    console.log("SLIDESHOW iimages : ", iimages);

    //const test = Object.keys(iimages)
    //console.log("SLIDESHOW : ", test)

    return (
        <SlideshowContainer>
            <PictoLeft onClick={() => setindex(index - 1)} />
            <img src={`${images[index]}`} alt="TEST" />
            <PictoRight onClick={() => setindex(index + 1)} />
        </SlideshowContainer>
    );
}
