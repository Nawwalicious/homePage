import React from "react";
import { useState } from "react";

import './Page.css'

function Navbar()
{
    return(
        <div className="Page-Root">

            <div className="Navbar-Root">
                <ul>
                    <li><a>New In</a></li>
                    <li><a>Clothing</a></li>
                    <li><a>Shoes</a></li>
                    <li><a>Bags</a></li>
                    <li><a>Accessories</a></li>
                    <li><a>Boutiques</a></li>
                    <li><a>Editorials</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;