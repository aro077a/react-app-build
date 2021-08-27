import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  fetchServices,
  allServicesSelector,
} from '../../redux/features/our-services/ourServicesSlice';
import { useAppSelector } from '../../redux/hooks';
import Spinner from '../reusable-components/Spinner';

import ServicesEstimate from './ServicesEstimate';
import ServicesListItem from './ServicesListItem';
import ServicesNavbar from './ServicesNavbar';
import ServicesSteps from './ServicesSteps';
import ServicesTitle from './ServicesTitle';

const ServicesContainer: FC = () => {
  const dispatch = useDispatch();
  const { language } = useAppSelector((state) => state.currentLanguage);
  const {
    services: { services },
    loading,
  }: any = useSelector(allServicesSelector);

  useEffect(() => {
    dispatch(fetchServices(language));
  }, [dispatch, language]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='services__layout'>
            <ServicesTitle
              title='our services'
              titleClassName='services__layout__title'
            />
            <ServicesNavbar services={services} />
            <ServicesListItem services={services} />
          </div>
          <ServicesSteps />
          <ServicesEstimate />
        </>
      )}
    </>
  );
};

export default ServicesContainer;
