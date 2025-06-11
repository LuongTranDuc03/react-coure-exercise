import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useNavigation } from 'react-router-dom';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';

  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
      
    </div>
  );
};

export default HomeLayout;