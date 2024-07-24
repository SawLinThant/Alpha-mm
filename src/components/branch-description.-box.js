import "../style/branch-description-box.css"

const BrachDescription = ({name,location,phone}) => {
    return(
        <div className="branch-description">
            <div className="branch-description-text">
                <div className="branch-heading-container">
                <h3 className="branch-name">{name}</h3>
                <div className="go-link"></div>
                </div>          
                <p className="branch-location">{location}</p>
                <p className="branch-phone-no">{phone}</p>
            </div>
        </div>
    )
}
export default BrachDescription;