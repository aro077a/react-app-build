import Estimate from './Estimate';
import Services from './Services';

const OurServices = ({homeEstimate}:any) => (


  <div className='ourServices__container'>
    <Services />
    <Estimate homeEstimate={homeEstimate} />
  </div>
);

export default OurServices;
