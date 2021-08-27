import Cultura_responsable from '../../assets/images/cultura_responsable.png';

const AboutUs = () => {
  return (
    <div className='aboutUs__container'>
      <h3 className='aboutUs__container--title'>WHO WE ARE</h3>

      <div className='aboutUs__container__info'>
        <p>
          We are proud of providing high-quality, cost-effective and creative
          software design and development services. We are focused on Web
          development, Mobile development, Data engineering & Data science,
          Consultation and Optimization. <br />
          Our client&quot;s goals are our goals - our job is taking care of our
          clients success - the proof is the long-term partnership with our
          clients from all over the world. Our specialists, possessing a high
          level of professionalism, carry out works of varying complexity, based
          on the business goals and objectives of our customers.
          <br />
          We can help you get the &quot;look&quot; you need to achieve your
          business goals and develop a web site which corresponds to your style.
          We love being positive, light and creative. If that describes you and
          your business, contact us now!
        </p>
        <img src={Cultura_responsable} alt='img' />
      </div>
    </div>
  );
};

export default AboutUs;
