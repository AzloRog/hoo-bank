import "./cardDeal.css"

import image from "./public/image.png"


const CardDeal = () => {
    return (
        <div className="card-deal">
            <div className="container card-deal-container">
                <div className="card-deal-body">
                    <h2 className="card-deal-body-title">
                        Find a better card deal in few easy steps.
                    </h2>
                    <p className="card-deal-body-text">
                        Arcu tortor, purus in mattis at sed integer faucibus. 
                        Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                    </p>
                    <button className="card-deal-body-btn primary-button">
                        Get Started
                    </button>
                </div>
                <div className="card-deal-image">
                    <img src={image} alt="the decor billing" />
                </div>

            </div>
        </div>
    )
}

export default CardDeal