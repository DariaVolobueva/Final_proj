import React from "react";
import Logo from "./Header-logo";
import { Menu } from "./Header-menu";
import { Search } from "./Header-search";
import { Cart } from "./Header-cart";
import { Burger } from "./Header-burger";

function Header() {
    return (
      <header className="header header_position">
        <Logo></Logo>
        <Menu></Menu>
        <Search></Search>
        <Cart></Cart>
        <Burger></Burger>
      </header>
    );
  }
  
  export default Header;
  