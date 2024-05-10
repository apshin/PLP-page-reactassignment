import { FaRegHeart, FaRegUser} from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { SiAnkermake } from "react-icons/si";
import "./Navigation.css";

const Nav = ({ handleSearchQueryChange, searchQuery }) => {
  return (
   <nav>
    <div className="logo">
    <h1 className="logo-heading"><SiAnkermake className="logo-icon"/><div className="logo-name">Mahal</div></h1>
    </div>
    <div className="user-profile">
      <div className="nav">
        <input type="text" className="search-input d-none d-md-block" 
          value={searchQuery}
          onChange={handleSearchQueryChange} placeholder="Enter your search"/>
      </div>
      <a href="">
        <FaRegHeart className="nav-icons"/>
      </a>
      <a href="">
        <FaRegUser className="nav-icons"/>
      </a>
      <a href="">
        <FiShoppingBag className="nav-icons"/>
      </a>
    </div>
   </nav>
  );
};

export default Nav;
