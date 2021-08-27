import { useState } from 'react';

import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import * as Yup from 'yup';

import { EMAIL_REGEXP } from '../../utils/regexp';
import Button from '../reusable-components/Button';
import Input from '../reusable-components/Input';
import TextArea from '../reusable-components/TextArea';

const ContactUs = () => {
  const { t } = useTranslation('common');
  const [phone, setPhone] = useState<string>('');

  const ContactUsSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, t('contact.validation.name.min'))
      .max(50, t('contact.validation.name.max'))
      .required(t('contact.validation.name.required')),
    lastName: Yup.string()
      .min(2, t('contact.validation.name.min'))
      .max(50, t('contact.validation.name.max'))
      .required(t('contact.validation.name.required')),
    email: Yup.string()
      .email(t('contact.validation.email.email'))
      .matches(EMAIL_REGEXP, t('contact.validation.email.matches'))
      .required(t('contact.validation.email.required')),
  });

  
  const handleSubmit = (values: any) => {
    values.phone = phone;
  };

  return (
    <div className='contactUs__container'>
      <h2 className='contactUs__container--title'>{t('contact.title')}</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone,
          company: '',
          message: '',
          subscribe: false,
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
              className='contactUs__container__form'
              onSubmit={handleSubmit}
            >
              <div className='contactUs__container__form__name'>
                <Input
                  placeholder={t('contact.placeholder.firstName', {
                    framework: ' *',
                  })}
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? 'error' : ''
                  }
                  errorsMessage={
                    errors.firstName && touched.firstName && errors.firstName
                  }
                />
                <Input
                  placeholder={t('contact.placeholder.lastName', {
                    framework: ' *',
                  })}
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.lastName && touched.lastName ? 'error' : ''}
                  errorsMessage={
                    errors.lastName && touched.lastName && errors.lastName
                  }
                />
              </div>
              <Input
                placeholder={t('contact.placeholder.email', {
                  framework: ' *',
                })}
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'error' : ''}
                errorsMessage={errors.email && touched.email && errors.email}
              />

              <PhoneInput
                country='am'
                value={phone}
                onChange={(phone) => setPhone(phone)}
                onBlur={(phone) => handleBlur(phone)}
                inputProps={{
                  name: 'phone',
                  required: true,
                }}
              />

              <Input
                placeholder={t('contact.placeholder.company')}
                name='company'
                onChange={handleChange}
                value={values.company}
              />
              <div className='contactUs__container__form__textarea'>
                <h4 className='contactUs__container__form__textarea--title'>
                  {t('contact.helpMessage')}
                </h4>
                <TextArea
                  placeholder={t('contact.placeholder.message', {
                    framework: '...',
                  })}
                  name='message'
                  onChange={handleChange}
                  value={values.message}
                />
              </div>
              <label className='contactUs__container__form__checkbox'>
                <input
                  type='checkbox'
                  name='subscribe'
                  onChange={handleChange}
                  checked={values.subscribe}
                />
                <span className='checkmark'></span>
                <span className='contactUs__container__form__checkbox--text'>
                  {t('contact.checkBox')}
                </span>
              </label>
              <Button
                className='contactUs__container__form__submitButton'
                buttonText={t('contact.button')}
                type='submit'
              />
              <p className='contactUs__container__form__privacy'>
                {t('contact.acceptPolicy')}
              </p>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactUs;
