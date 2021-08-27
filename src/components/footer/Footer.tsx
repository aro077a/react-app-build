import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import worldMap from '../../assets/images/worldMap.webp';
import {
  fetchFooterCompany,
  fetchFooterContact,
} from '../../redux/features/footer/footerSlice';
import {
  fetchServices,
  allServicesSelector,
} from '../../redux/features/our-services/ourServicesSlice';
import { useAppSelector } from '../../redux/hooks';
import FooterLogo from '../icon-containers/FooterLogo';
import SocialIcons from '../reusable-components/SocialIcons';

const Footer = () => {
  const { language } = useAppSelector((state) => state.currentLanguage);
  const { footerCompany = [], footerContact = [] } = useAppSelector(
    (state) => state.footer
  );

  //company
  const { pageInf: companyInf }: any = (footerCompany && footerCompany) || {};
  const { title: companyTitle, description: companyDesc } =
    (companyInf && companyInf[0]) || [];
  const companyDescription =
    companyDesc && companyDesc.replace(/(<([^>]+)>)/gi, '').replace(/\n/ig,',').split(',');

  //contact
  const { pageInf: contactInf }: any = (footerContact && footerContact) || {};
  const { title: contactTitle, description: contactDesc } =
    (contactInf && contactInf[0]) || [];
  const contactDescription =
    contactDesc && contactDesc.replace(/(<([^>]+)>)/gi, '').replace(/&nbsp;/ig,'').split(',');
  //services
  const {
    services: { services = [] },
  }: any = useSelector(allServicesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFooterCompany(language));
    dispatch(fetchFooterContact(language));
    dispatch(fetchServices(language));
  }, [dispatch, language]);

  return (
    <div className='footer__wrapper'>
      <FooterLogo className='footer__wrapper--logo' />
      <div className='footer__wrapper__content'>
        <div className='footer__wrapper__content__info'>
          <h6 className='footer__wrapper__content__info--title'>
            {contactTitle}
          </h6>
          {contactDescription?.map((item: string, i: number) => (
            <p key={i} className='footer__wrapper__content__info--text'>
              {item}
            </p>
          ))}
        </div>
        <div className='footer__wrapper__content__info'>
          <h6 className='footer__wrapper__content__info--title'>
            {companyTitle}
          </h6>
          {companyDescription?.map((item: string, i: number) => (
            <p key={i} className='footer__wrapper__content__info--text'>
              <Link
                to={`/${item.toLowerCase()}`}
                className='footer__wrapper__content__info--text-FAQ'
              >
                {item}
              </Link>
            </p>
          ))}
        </div>
        <div className='footer__wrapper__content__info'>
          <h6 className='footer__wrapper__content__info--title'>Services</h6>
          {services?.map((item: any, i: number) => (
            <p key={i} className='footer__wrapper__content__info--text'>
              <Link
                to={`/services/${item.id}`}
                className='footer__wrapper__content__info--text-FAQ'
              >
                {item.title}
              </Link>
            </p>
          ))}
        </div>
        <div className='footer__wrapper__content__image'>
          <img src={worldMap} alt='world' />
        </div>
      </div>
      <div className='footer__wrapper__bottom'>
        <p className='footer__wrapper__bottom--text'>Copyright. 2021</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Footer;
