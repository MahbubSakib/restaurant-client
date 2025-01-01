import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../components/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <section className='my-20'>
                <SectionTitle
                    heading={'Testimonials'}
                    subHeading={'What Our Client Say'}
                ></SectionTitle>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col items-center mx-20 text-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                />
                                <p className='text-6xl mt-3'><FaQuoteLeft></FaQuoteLeft></p>
                                <p className='mt-5'>{review.details}</p>
                                <h3 className='text-2xl text-orange-500'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;