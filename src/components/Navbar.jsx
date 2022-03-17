import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <h2>
          <li>
            <Link to ="/">HOME</Link>           
          </li>
          <li>
            <Link to ="/about">ABOUT</Link>            
          </li>
          <li>
            <Link to ="/movies">MOVIES</Link>            
          </li>
          </h2>
        </ul>
      </nav>
    </header>
  )
  
  
};
