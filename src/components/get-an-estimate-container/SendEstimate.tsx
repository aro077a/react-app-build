import { Link } from "react-router-dom";

import Button from "../reusable-components/Button";

const SendEstimateContainer = () => {


    return (
        <div className="sendEstimate__container">
            <div className="sendEstimate__container__wrapper">
                <div className="sendEstimate__container__text__container">
                    <p className="sendEstimate__container--title">Your request has been accepted !</p>
                    <p className="sendEstimate__container--description">Our Business Development Specialist will try to contact with you within 3 business days.</p>
                </div>
                <Link to='/'>
                    <Button
                        buttonText="back to homepage"
                        className="sendEstimate__container--btn" 
                    />
                </Link>
            </div>
        </div>
    );
};

export default SendEstimateContainer;