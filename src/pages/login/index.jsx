import Navbar from '@/components/reusable/Navbar';
import Login from '@/components/Home/Login';
const Home = () => {
  return (
    <section className="text-skin-white bg-skin-dark h-screen  mx-auto">
      <Navbar />
      <Login />
    </section>
  );
};

export default Home;