import './Banner.css'

export default function Banner({className, children}) {

    return (
        <div className={`bannercontainer ${className}`}>
            {children}
        </div>
    );
}