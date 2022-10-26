import React from "react";
import "./Header.css";
import {AiOutlineShoppingCart} from "react-icons/ai"


const Header = () => {
  return (
    
      <div className="header">
        <div className="headerLogo"><AiOutlineShoppingCart/> </div>
        <h1 className="headerTitle">FakeShop</h1>
        <form className="form" >
          <input type="text" className="input"placeholder="Search..."/>
          <button type="submit" ><img src="https://www.freeiconspng.com/uploads/search-icon-png-29.png" width="20px" alt="btn"/></button> 
          
        </form>
      </div>
    
  );
};

export default Header;
