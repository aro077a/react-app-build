import { useState } from 'react';

import { Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";

import { EMAIL_REGEXP } from "../../utils/regexp";
// import LeftArrowIcon from '../icon-containers/LeftArrowIcon';
// import Button from "../reusable-components/Button";
import Input from "../reusable-components/Input";
import TextArea from "../reusable-components/TextArea";

const EstimateMoreDetails = () => {

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
    };

    return (
        <div className="more__details__container">
            <p className="more__details__container--title">
                More details
            </p>
            <Formik
                initialValues={{

                fullName: "",
                email: "",
                phone,  
                company: "",
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
                       className="more__details__container__form"
                       onSubmit={handleSubmit}>
                        <Input
                            placeholder="Full Name *"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.fullName && touched.fullName ? "error" : ""
                            }
                            errorsMessage={
                                errors.fullName && touched.fullName && errors.fullName
                            }
                        />
                        <Input
                            placeholder="Email *"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? "error" : ""}
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

                        <Input
                            placeholder="Company"
                            name="company"
                            onChange={handleChange}
                            value={values.company}
                        />
                        <div className="more__details__container__form__textarea">
                            <TextArea
                            placeholder="More Details About Project"
                            name="message"
                            onChange={handleChange}
                            value={values.message}
                            />
                        </div>
                        <div className="more__details__container__form__file">
                            <label htmlFor="file">
                            <span>+</span> ATTACH FILES
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
                        {/* <div className="more__details__container__form__arrows">
                            <div className="more__details__container__form__arrows__leftArrow">
                                <LeftArrowIcon />
                                <p>BACK</p>
                            </div>
                            <Button
                                className="more__details__container__form__arrows__submitButton"
                                buttonText="SEND"
                                type="submit"
                            />
                        </div> */}
                    </form>
                );
                }}
            </Formik>
        </div>
    );
};

export default EstimateMoreDetails;