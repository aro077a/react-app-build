import { Formik } from "formik";
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { EMAIL_REGEXP } from "../../utils/regexp";
import CareerArrowIcon from "../icon-containers/CareerArrowIcon";
import { CareerPositionType } from "../model";
import Button from "../reusable-components/Button";
import Input from "../reusable-components/Input";

import { positionData } from "./fakeDataPosition";

const Position = () => {
  const ContactUsSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .matches(EMAIL_REGEXP, "Email is not valid")
      .required("Email is not valid"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="position__container">
      <h3 className="position__container--title">OPEN POSITIONS</h3>

      <div className="position__container__content">
        {positionData.map((item: CareerPositionType) => {
          return (
            <div key={item.id} className="position__container__itemWrapper">
              <Link to={`/career/${item.id}`}>
                <div className="position__container__content__item">
                  <div>
                    <h3>{item.profession}</h3>
                    <p>{item.location}</p>
                  </div>
                  <span>
                    <CareerArrowIcon />
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="position__container__getJob">
        <p className="position__container__getJob--subTitle">
          Can’t find the one for you right now? Sign up to get job updates.
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={ContactUsSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="position__container__getJob__inputGroup">
                  <Input
                    placeholder="Email address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`position__container__getJob__inputGroup--email ${
                      errors.email && touched.email ? "error" : ""
                    }`}
                    errorsMessage={
                      errors.email && touched.email && errors.email
                    }
                  />
                  <Button
                    type="submit"
                    buttonText="Sign up"
                    className="position__container__getJob__inputGroup--button"
                  />
                </div>
                <p className="position__container__getJob--text">
                  <BrowserView>
                    <a
                      rel="noopener noreferrer"
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=info.arnology@gmail.com"
                      target="_blank"
                    >
                      Or write directly to <span>info.arnology@gmail.com</span>
                    </a>
                  </BrowserView>
                  <MobileView>
                    <a
                      rel="noopener noreferrer"
                      href="mailto: info.arnology@gmail.com"
                      target="_blank"
                    >
                      Or write directly to <span>info.arnology@gmail.com</span>
                    </a>
                  </MobileView>
                </p>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Position;
