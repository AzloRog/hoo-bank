import "./business.css"
import feature01 from './public/image01.svg'
import feature02 from './public/image02.svg'
import feature03 from './public/image03.svg'

const Business = () => {
    return (
        <section className="business">
            <div className="container business-container">
                <div className="business-body">
                    <h2 className="business-body-title">
                        You do the business, we’ll handle the money.
                    </h2>
                    <p className="business-body-text">
                        With the right credit card, you can improve your financial life 
                        by building credit, earning rewards and saving money. But with hundreds 
                        of credit cards on the market.
                    </p>
                    <button className="business-body-btn primary-button">
                        Get Started
                    </button>
                </div>
                <ul className="business-features">
                    <Feature  
                        image={feature01} 
                        title="Rewards" 
                        text="The best credit cards offer some tantalizing combinations of promotions and prizes" 
                    />
                    <Feature  
                        image={feature02} 
                        title="100% Secured" 
                        text="We take proactive steps make sure your information and transactions are secure." 
                    />
                    <Feature  
                        image={feature03} 
                        title="Balance Transfer" 
                        text="A balance transfer credit card can save you a lot of money in interest charges." 
                    />

                </ul>
            </div>
        </section>
    )
}

const Feature = ({image, title, text}) => (
    <div className="feature">
        <div className="feature-img">
            <img src={image} alt="the image" />
        </div>
        <div className="feature-body">
            <h3 className="feature-body-title">
                {title}
            </h3>
            <p className="feature-body-text">
                {text}
            </p>
        </div>
        
    </div>
)

export default Business