import { Link } from "react-router";
import { Eco, Logo1 } from "../../assets";

const Logo = () => {
  return (
    <Link to="/" className="navbar-brand">
      <div className="flex flex-row justify-center items-center gap-4 ">
        <img
          src={Logo1}
          alt="UFAS-LOGO"
          className="w-20 h-12 md:w-[100px] md:h-[60px]"
        />
        <img
          src={Eco}
          alt="Economi-Faculty-LOGO"
          className="w-28 h-16 md:w-[135px] md:h-[55px]"
        />
      </div>
    </Link>
  );
};

export default Logo;
