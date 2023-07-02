import { Link } from 'react-router-dom';
import homeLogo from '../assets/home_logo.png';
import Button from './Button';

const DefaultLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="dark min-h-full">
      <div className="min-h-screen bg-jediMaster dark:bg-sithMaster">
        <header className="flex align-middle justify-between w-screen">
          <Link to="/">
            <img src={homeLogo} alt="Home Logo" />
          </Link>
          <div className="m-5">
            <Button>
              <Link to="/favorites">View Favorites</Link>
            </Button>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
