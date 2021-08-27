import { useState, useEffect } from "react";

import Collapse, { Panel } from "rc-collapse";
import { useDispatch, useSelector } from "react-redux";

import minus from "../../assets/images/minus.webp";
import plus from "../../assets/images/plus.webp";
import { fetchFaq, faqSelector } from "../../redux/features/faq/faqSlider";
import { useAppSelector } from "../../redux/hooks";
import Spinner from "../reusable-components/Spinner";
import Title from "../reusable-components/Title";

const FaqContainer = () => {
  const [isActive, setIsActive] = useState<number[]>([]);
  const { language } = useAppSelector((state) => state.currentLanguage);
  const dispatch = useDispatch();

  const { faqs = [], loading }: any = useSelector(faqSelector);
  const { faq = [] }: any = (faqs && faqs) || [];

  useEffect(() => {
    dispatch(fetchFaq(language));
  }, [dispatch, language]);

  const toggleCollapse = (id: any) => {
    setIsActive(id);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="faq__container__wrapper">
          <Title
            className="faq__container__wrapper--title"
            title={"Frequently Asked Questions"}
          />
          <div className="faq__container">
            <Collapse onChange={(active) => toggleCollapse(active)} accordion>
              {faq.map((item: any) => {
                return (
                  <Panel
                    key={item.id}
                    showArrow={false}
                    headerClass="faq__container__panel-header"
                    header={item.question}
                    extra={
                      <img
                        src={isActive?.includes(item.id) ? minus : plus}
                        alt="plus/minus"
                      />
                    }
                  >
                    <div className="faq__content">{item.answer}</div>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        </div>
      )}
    </>
  );
};

export default FaqContainer;
