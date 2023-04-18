import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, title, cover }) {
    return (
        <div className="cardcontainer">
            <Link to={`/details/${id}`}>
                <div className="cardImgContainer">
                    <img src={cover} alt="{title}" />
                </div>
                <div className="cardTitleContainer">
                    <h2>{title}</h2>
                </div>
            </Link>
        </div>
    );
}

Card.propTypes = {
    id:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
};

Card.defaultProps = {
    id:  "",
    title: "",
    cover: ""
};
