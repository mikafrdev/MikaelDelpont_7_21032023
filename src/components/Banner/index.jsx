import './Banner.css'
import PropTypes from "prop-types";

export default function Banner({className, children}) {

    return (
        <div className={`bannercontainer ${className}`}>
            {children}
        </div>
    );
}


Banner.propTypes = {
    className: PropTypes.string.isRequired
};

Banner.defaultProps = {
    className: ""
};