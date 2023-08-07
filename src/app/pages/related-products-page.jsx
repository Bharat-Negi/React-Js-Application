import React from "react";
import Carousel from 'react-multi-carousel';
import RelatedProducts from "../component/related-products"
import relatedProductsData from '../data-files/related-products-data.json'

function RelatedProductsPage() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 766 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 766, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <section className="py-5">
            <div className="container">
                <div className="row text-left p-2 pb-3">
                    <h4>Related Products</h4>
                </div>

                <Carousel
                    responsive={responsive}
                    // showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                // removeArrowOnDeviceType={["tablet", "mobile"]}                     
                >
                    {relatedProductsData && relatedProductsData.map(relatedProduct => {
                        return <RelatedProducts 
                        key={relatedProduct.id}
                        item={relatedProduct} />
                    }
                    )}
                </Carousel>
            </div>
        </section>
    )
}

export default RelatedProductsPage;