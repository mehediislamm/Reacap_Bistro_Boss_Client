import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, SetReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => SetReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className="mx-24 my-16 flex flex-col items-center">
                            <Rating style={{maxWidth:180}} value={review?.rating} readOnly></Rating>
                            <p>
                                {review?.details}
                            </p>
                            <h3 className="text-2xl text-orange-400">{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;