import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import HomeView from '../views/homeView';
import CartView from '../views/cartView';


const Home = React.lazy(() => import('../views/homeView'));
const Cart = React.lazy(() => import('../views/cartView'));

function MainNavigation(props) {
    return (

        <Router>
            <header className="main-header flex y-items-center">
                <div className="container flex">
                    <nav>
                        <ul className="main-nav-list roboto flex y-items-center">
                            <li>
                                <Link className="link-nav" to="/" >
                                    <h4>
                                    <HomeIcon className="headerButton"/>
                                    </h4>
                                </Link>
                            </li>
                            <li>
                                <Link className="link-nav" to="/cartView">
                                <ShoppingCartIcon className="headerButton"/> <sup> {props.count} </sup>
                                </Link>
                            </li> 
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/cartView" element={<CartView />} />
                </Routes>
            </main>
        </Router>
    )
}

export default MainNavigation;