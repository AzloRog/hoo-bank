import "./billing.css"

import bill from "./public/image.png"
import appleIcon from "./public/apple.svg"
import playIcon from "./public/play.svg"

const Billing = () => {
    return (
        <div className="billing">
            <div className="container billing-container">
                <div className="billing-img">
                    <img src={bill} alt="the bill decor image" />
                </div>
                <div className="billing-body">
                    <div className="billing-body-title">
                        Easily control your billing & invoicing.
                    </div>
                    <div className="billing-body-text">
                        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio 
                        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                    </div>
                    <div className="billing-body-buttons">
                        <button className="billing-body-buttons-btn">
                            <div className="billing-body-buttons-btn-img">
                                <img src={appleIcon} alt="" />
                            </div>
                            <div className="billing-body-buttons-btn-body">
                                <div>Download on the</div>
                                <div className="billing-body-buttons-btn-body-upper">App Store</div>
                            </div>
                        </button>
                        <button className="billing-body-buttons-btn">
                            <div className="billing-body-buttons-btn-img">
                                <img src={playIcon} alt="" />
                            </div>
                            <div className="billing-body-buttons-btn-body">
                                <div>Get it on</div>
                                <div className="billing-body-buttons-btn-body-upper">Google Play</div>
                            </div>
                        </button>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Billing