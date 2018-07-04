import React from 'react'
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Home from '../screens/home'
import Sobre from '../screens/sobremim'


export default props => (
    <Router>
        <div className='grid'>
            <header className="main-menu">
                <div className="header-wrap">
                    <img src='https://image.ibb.co/fK6cCJ/eu.jpg'></img>
                    <h1 className="menu-title">Victor Levi</h1>
                    <nav>
                        <div className='nav-menu'>
                            <ul>
                                <li>
                                    <NavLink className="tags" activeStyle={{ color: '#FFF' }} to="/home">
                                    <i className="fa fa-home fa-2x" />
                                    <p>Home</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink className="tags" activeStyle={{ color: '#FFF' }} to="/sobre">
                                    <i className="fa fa-user fa-2x" />
                                    <p>Sobre mim</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink href='#' activeStyle={{ color: '#FFF' }} to="/portifolio">
                                    <i className="fa fa-eye fa-2x" />
                                    <p>Portifolio</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink href='#' activeStyle={{ color: '#FFF' }} to="/curriculo">
                                    <i className="fa fa-address-card fa-2x" />
                                    <p>Curriculo</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink href='#' activeStyle={{ color: '#FFF' }} to="/contato">
                                    <i className="fa fa-phone fa-2x" />
                                    <p>Contato</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <Route exact path="/" component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/sobre' component={Sobre} />
        </div>
    </Router>

)