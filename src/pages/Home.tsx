import HomeContainer from "components/home-container/HomeContainer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Arnology Home</title>
        <meta name="description" content="Some content here" />
      </Helmet>
      <HomeContainer />
    </>
  );
};

export default Home;
