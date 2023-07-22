import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import "../Nav/NavbarStyles.css";
import { styled } from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='navbar__items'>
                <Link to="/">
                <Nav>
                    <GiKnifeFork />
                    <Logo>Recipes App</Logo>
                </Nav>
                </Link>
                <div className='menu-icons' onClick=
                    {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                    ></i>
                </div>

                <ul className={this.state.clicked ? "nav__menu active" : "nav__menu"}>

                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href="/">{item.title}</a>
                            </li>
                        )
                    })}


                    <button>Sign Up</button>

                </ul>

            </nav>
        )
    }
}
const Logo  = styled.div`
    padding-left: .5rem;
    cursor: pointer;
    
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two' , cursive;
    text-decoration: none;
`
const Nav = styled.div`
padding-left: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

