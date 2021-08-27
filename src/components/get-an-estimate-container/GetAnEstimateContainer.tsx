import { useState } from 'react';

// import { Link } from "react-router-dom";

// import { colors } from '../../utils/constantColors';
import LeftArrowIcon from '../icon-containers/LeftArrowIcon';
import Button from '../reusable-components/Button';

// import { colors } from "../../utils/constantColors";
// import Popup from "../reusable-components/Popup";

import EstimateMoreDetails from './EstimateMoreDetails';
import ProjectNeed from './ProjectNeed';
import SendEstimateContainer from './SendEstimate';

const GetAnEstimateContainer = () => {
  const [next, setNext] = useState(false);
  const [send, setSend] = useState(false);

  const handleSend = () => {
    setSend(true);
  };

  const handleBack = () => {
    setNext(false);
  };

  const handleNextStep = () => {
    setNext(true);
  };

  return (
    <div className='getAnEstimate__wrapper'>
      {send ? (
        <SendEstimateContainer />
      ) : (
        <>
          <div className='getAnEstimate__wrapper__free'>
            Get An Estimate free
          </div>
          {!next ? (
            <>
              <ProjectNeed />
              <div
                className='getAnEstimate__wrapper__btnContainer'
                onClick={handleNextStep}
              >
                <Button
                  buttonText='next step'
                  className='getAnEstimate__wrapper--btn'
                />
              </div>
            </>
          ) : (
            <>
              <EstimateMoreDetails />
              <div className='getAnEstimate__wrapper__btnWrapper'>
                <div
                  className='getAnEstimate__wrapper--leftArrow'
                  onClick={handleBack}
                >
                  <LeftArrowIcon />
                  <p>BACK</p>
                </div>
                <div onClick={handleSend}>
                  <Button
                    className='getAnEstimate__wrapper--btn'
                    buttonText='send'
                    type='submit'
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GetAnEstimateContainer;
