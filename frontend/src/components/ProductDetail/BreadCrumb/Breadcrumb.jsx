import { Link, useNavigate } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="single-topbar">
        <nav className="breadcrumb">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Man</a>
            </li>
            <li>
              <a href="#">Pants</a>
            </li>
            <li>Basic Colored Sweatpants With Elastic Hems</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;
