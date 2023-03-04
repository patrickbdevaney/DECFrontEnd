import Navbar from '../reusable/Navbar';
import Login from './Login';


const Home = () => {
  return (
    <section className="text-skin-white bg-skin-dark h-screen  mx-auto">
      <Navbar/>
      
      <Login />
    </section>
  );
};

export default Home;
