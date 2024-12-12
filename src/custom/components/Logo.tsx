import { Link } from "react-router";
import { Eco, Logo1 } from "../../assets";

const Logo = () => {
  return (
    <Link to="/" className="navbar-brand">
      <div className="flex flex-row gap-4 items-start">
        <img
          src={Logo1}
          alt="UFAS-LOGO"
          className="w-20 h-20 md:w-[110px] md:h-[75px]"
        />
        <img
          src={Eco}
          alt="Economi-Faculty-LOGO"
          className="w-28 h-20 md:w-[145px] md:h-[65px]"
        />
      </div>
    </Link>
  );
};

export default Logo;
