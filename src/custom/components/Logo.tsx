import { Link } from "react-router";
import { Logo1 } from "../../assets";

const Logo = () => {
  return (
    <Link to="/" className="navbar-brand">
      <img
        src={Logo1}
        alt="UFAS-LOGO"
        className="w-16 h-16 md:w-[140px] md:h-[100px]"
      />
    </Link>
  );
};

export default Logo;
