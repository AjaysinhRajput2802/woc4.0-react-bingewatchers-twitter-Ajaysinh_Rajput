import React from "react";
import { Link } from "react-router-dom";
// Components
import Home from '../Home';
import Trending from "../Trending";
import Profile from "../Profile";
// Styles
import { Wrapper, Content } from "./NavBar.style";

const NavBar = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>Home</Link>
        <span>|</span>
        <Link to='/trending'>Trending</Link>
        <span>|</span>
        <Link to='/profile'>Profile</Link>
      </Content>
    </Wrapper>
  );
};

export default NavBar;
