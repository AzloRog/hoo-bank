import "./payment.css";
import Discount from "./public/Discount.svg";
import Arrow from "./public/Arrow.png";
import Hand from "./public/Hand.png";

const Payment = () => {
  return (
    <section className="payment">
      <div className="payment-container container">
        <div className="payment-row">
          <div className="payment-body">
            <div className="payment-discount">
              <div className="payment-discount-img">
                <img src={Discount} alt="" />
              </div>
              <div className="payment-discount-body">
                <span className="payment-discount-body-light">20%</span>{" "}
                DISCOUNT FOR
                <span className="payment-discount-body-light">
                  1 MONTH
                </span>{" "}
                ACCOUNT
              </div>
            </div>
            <div className="payment-title">
              <div className="payment-title-text">
                The Next
                <br /> <span>Generation</span>
                <br /> Payment Method.
              </div>
              <button className="payment-title-btn">
                <div className="payment-title-btn-body">
                  Get
                  <img src={Arrow} /> <br />
                  Started
                </div>
              </button>
            </div>
            <div className="payment-text">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </div>
          </div>
          <div className="payment-img">
            <img src="./hand.png" alt="the hand logo" />
          </div>
        </div>
        <div className="payment-footer">
          <div className="payment-footer-item">
            <div className="payment-footer-item-count">3800+</div>
            <div className="payment-footer-item-text">User active</div>
          </div>
          <div className="payment-footer-item">
            <div className="payment-footer-item-count">230+</div>
            <div className="payment-footer-item-text">TRUSTED BY COMPANY</div>
          </div>
          <div className="payment-footer-item">
            <div className="payment-footer-item-count">$230M+</div>
            <div className="payment-footer-item-text">transaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
