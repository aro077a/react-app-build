import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { PrivacyState } from "../../redux/features/privacy-policy/models";
import { fetchPrivacy } from "../../redux/features/privacy-policy/privacy";
import Title from "../reusable-components/Title";

const PrivacyContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPrivacy("en"));
  }, [dispatch]);

  const { privacy }: PrivacyState = useSelector(
    (state: PrivacyState) => state.privacy
  );

  const { title, description } = privacy;

  return (
    <div className="privacy__container">
      <Title className="faq__container__wrapper--title" title={title} />
      <div className="privacy__container__content">
        <div
          className="privacy__container--description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default PrivacyContainer;
