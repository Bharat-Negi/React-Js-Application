import React, { useState } from "react";

const proImgData = [
    {
        id: "1",
        key: "1",
        title: "Title1",
        text: "Text1.",
        img: "images/product_single_01.jpg"
    },
    {
        id: "2",
        key: "2",
        title: "Title2",
        text: "Text2.",
        img: "images/product_single_02.jpg"
    },
    {
        id: "3",
        key: "3",
        title: "Title3",
        text: "Text3.",
        img: "images/product_single_03.jpg"
    },
    {
        id: "4",
        key: "4",
        title: "Title4",
        text: "Text4",
        img: "images/product_single_04.jpg"
    }
];

function SingleProduct() {
    const [toggle, setToggle] = useState("");

    return (
        <div className="col-lg-5 mt-5">
            <div className="card mb-3">
                <img className="card-img img-fluid" src="images/product_single_10.jpg" alt="Card image cap" id="product-detail" />
            </div>
            <div className="row">
                {/* Start Controls */}
                <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="prev">
                        <i className="text-dark fas fa-chevron-left"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                </div>
                {/* End Controls */}
                {/* Start Carousel Wrapper */}
                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                    {/* Start Slides */}
                    <div className="carousel-inner product-links-wap" role="listbox">

                        {/* First slide */}
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_01.jpg" alt="Product Image 1" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_02.jpg" alt="Product Image 2" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_03.jpg" alt="Product Image 3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* First slide */}

                        {/* Second slide */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_04.jpg" alt="Product Image 4" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_05.jpg" alt="Product Image 5" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_06.jpg" alt="Product Image 6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Second slide */}

                        {/* Third slide */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_07.jpg" alt="Product Image 7" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_08.jpg" alt="Product Image 8" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src="images/product_single_09.jpg" alt="Product Image 9" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Third slide */}
                    </div>
                    {/* End Slides */}
                </div>
                {/* End Carousel Wrapper */}
                {/* Start Controls */}
                <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="next">
                        <i className="text-dark fas fa-chevron-right"></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* End Controls */}
            </div>
        </div>
    )
}

export default SingleProduct;