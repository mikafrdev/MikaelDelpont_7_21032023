import React from "react"
import "./Stars.css"
import colors from "../../utils/style/colors";
import PropTypes from "prop-types";

export default function Stars({ starsNumber, rating }) {
    let stars = [];

    for (let i = 1; i <= starsNumber; i++) {

        stars.push(
            <svg key={i} width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                <path 
                    fill={rating >= i ? `${colors.primary}` : `${colors.secondary}`}
                    d="M7.43233 0.45698C7.29777 0.177714 7.01344 0 6.70117 0C6.38891 0 6.10711 0.177714 5.97001 0.45698L4.3376 3.81578L0.691971 4.354C0.387322 4.3997 0.133448 4.61296 0.0395141 4.90492C-0.0544193 5.19688 0.0217428 5.5193 0.240075 5.7351L2.88544 8.35258L2.26091 12.0516C2.21014 12.3562 2.33707 12.666 2.58841 12.8462C2.83975 13.0265 3.17232 13.0493 3.4465 12.9046L6.70371 11.1655L9.96091 12.9046C10.2351 13.0493 10.5677 13.029 10.819 12.8462C11.0703 12.6634 11.1973 12.3562 11.1465 12.0516L10.5194 8.35258L13.1648 5.7351C13.3831 5.5193 13.4618 5.19688 13.3654 4.90492C13.2689 4.61296 13.0176 4.3997 12.7129 4.354L9.06474 3.81578L7.43233 0.45698Z" 
                />
            </svg>
        );
    }

    return (
        <div className="starscontainer">
            {stars}
        </div>
    )
}

Stars.propTypes = {
    starsNumber: PropTypes.number,
    rating: PropTypes.number.isRequired
};

Stars.defaultProps = {
    starsNumber: 5,
    rating: 1
};