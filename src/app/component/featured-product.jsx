import React from "react";
import { Link } from 'react-router-dom';
import FeaturedProData from '../data-files/featured-product-data.json'
import Star from "./star";

function featuredProduct({stars}) {
    return(
        FeaturedProData && FeaturedProData.map(FeaturedProData => {
            return (
                <div className="col-12 col-md-4 mb-4" key={FeaturedProData.id}>
                    <div className="card h-100">
                        <Link to="/shop-single">
                            <img src={FeaturedProData.img} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <Star stars={FeaturedProData.stars}/>
                                </li>
                                <li className="text-muted text-right">${FeaturedProData.money}</li>
                            </ul>
                            <Link to="/shop-single" className="h2 text-decoration-none text-dark">
                                {FeaturedProData.title}
                            </Link>
                            <p className="card-text">
                                {FeaturedProData.details}
                            </p>
                            {
                               FeaturedProData.review && FeaturedProData.review.map( data => {
                                    return(
                                        <p className="text-muted" key={data.id}>Reviews ({data.point})</p>
                                    )
                                })
                            }                            
                        </div>
                    </div>
                </div>
            )
        })
    )    
}

export default featuredProduct;