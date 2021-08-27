import { useState } from "react";

import { Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";

import { EMAIL_REGEXP } from "../../utils/regexp";
import Button from "../reusable-components/Button";
import Input from "../reusable-components/Input";
import TextArea from "../reusable-components/TextArea";

const ApplyPosition = () => {
  const [phone, setPhone] = useState<string>("");

  const ContactUsSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .matches(EMAIL_REGEXP, "Email is not valid")
      .required("Email is not valid"),
  });

  const handleSubmit = (values: any) => {
    values.phone = phone;
    values = {
      fullName: "",
      email: "",
      phone,
      message: "",
      file: "",
    };
  };

  return (
    <div className="applyPosition__container">
      <h3 className="applyPosition__container--title">
        APPLY FOR THIS POSITION
      </h3>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone,
          message: "",
          file: "",
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
            <form
              className="contactUs__container__form"
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="FULL Name *"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.fullName && touched.fullName ? "error" : ""}
                errorsMessage={
                  errors.fullName && touched.fullName && errors.fullName
                }
              />
              <Input
                placeholder="E-Mail *"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`contactUs__container__form__inputGroup ${
                  errors.email && touched.email ? "error" : ""
                }`}
                errorsMessage={errors.email && touched.email && errors.email}
              />
              <PhoneInput
                country="am"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                onBlur={(phone) => handleBlur(phone)}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
              />

              <div className="contactUs__container__form__textarea">
                <TextArea
                  placeholder="Cover Letter (If have)"
                  name="message"
                  onChange={handleChange}
                  value={values.message}
                />
              </div>
              <div className="applyPosition__container__form__file">
                <label htmlFor="file">
                  <span>+</span> ATTACH RESUME
                </label>
                {values.file}
                <Input
                  id="file"
                  placeholder="File"
                  type="file"
                  name="file"
                  value={values.file}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`file ${
                    errors.file && touched.file ? "error" : ""
                  }`}
                  errorsMessage={errors.file && touched.file && errors.file}
                />
              </div>

              <Button
                className="applyPosition__container__form__submitButton"
                buttonText="SUBMIT APPLICATION"
                type="submit"
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ApplyPosition;
