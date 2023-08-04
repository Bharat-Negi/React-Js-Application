import React from "react";
import BannerSection from '../component/banner-section';
import FeaturedProduct from '../component/featured-product'

function MainSection() {
    return (
        <>
            <BannerSection />
            {/* Start Categories of The Month */}
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Categories of The Month</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src='images/category_img_01.jpg' className="rounded-circle img-fluid border" /></a>
                        <h5 className="text-center mt-3 mb-3">Watches</h5>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src='images/category_img_02.jpg' className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src='images/category_img_03.jpg' className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                </div>
            </section>
            {/* End Categories of The Month */}

            {/* Start Featured Product */}
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Product</h1>
                            <p>
                                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <FeaturedProduct />                        
                    </div>
                </div>
            </section>
            {/* End Featured Product */}
        </>
    );
  }
  
  export default MainSection;