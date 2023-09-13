import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

import './Page.css'

function Page()
{

    const [selectedImage, setSelectedImage] = useState("Big.jpg");

    function handleImageClick(imageUrl) {
        setSelectedImage(imageUrl);
    }

    return(
        <div>
            <div className="Root">
                <Navbar/>

                <div className="Content-Body">

                <div className="Content-Body-Left">
                    <div className="Content-Body-Left-Pic">
                    <img id="1" src="Small.jpg" onClick={() => handleImageClick("Big.jpg")} />
                    <img id="2" src="Small.jpg" onClick={() => handleImageClick("Big2.jpg")} />
                    <img id="3" src="Small.jpg" onClick={() => handleImageClick("Big3.jpg")} />
                    <img id="4" src="Small.jpg" onClick={() => handleImageClick("Big4.jpg")} />
                    <img id="5" src="Small.jpg" onClick={() => handleImageClick("Big5.jpg")} />
                    </div>
                </div>
                <div className="Content-Body-Center">
                    <div className="Content-Body-Center-Pic">
                        <img src={selectedImage}/>
                    </div>
                </div>
                <div className="Content-Body-Right">
                    <p  className="Title">Cruise Zhangao Design</p>
                    <p className="Product-Name">MCQ Alexander MC Queen</p>
                    <p className="Price">$ 630.00</p>

                    <p className="Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, obcaecati.</p>

                    <p className="Size-Descriptor">Select Sizes</p>
                    <div className="Size-Buttons">
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>

                    <div className="Final-Buttons">
                        <button>Go-To Page</button>
                        <button>Save To Wishlist</button>
                    </div>
                
                </div>

            </div>
            </div>
        </div>
    );
}

export default Page;