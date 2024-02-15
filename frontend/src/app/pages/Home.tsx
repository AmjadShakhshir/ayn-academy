import Brands from "../containers/Brands";
import Why from "../containers/Why";
import Future from "../containers/Future";
import CoursesFeatures from "../containers/CoursesFeatures";
import Cta from "../containers/CTA";
import Possibility from "../containers/Possibility";
import Schedule from "../containers/Schedule";
import Header from "../containers/Header";

const Home = () => {
  return (
    <>
        <Header />
        <Brands />
        <Why />
        <Future />
        <Possibility />
        <Cta />
        <CoursesFeatures />
        <Schedule />
    </>
  )
}

export default Home