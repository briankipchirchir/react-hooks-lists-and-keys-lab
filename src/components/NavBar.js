import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
     <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
  </nav>;
}

export default NavBar;
