import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../assets/home/slide1.jpg';
import slider2 from '../../assets/home/slide2.jpg';
import slider3 from '../../assets/home/slide3.jpg';
import slider4 from '../../assets/home/slide4.jpg';
import slider5 from '../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-10"
        >
            <SwiperSlide>
                <img src={slider1} alt="" />
                <h4 className='text-4xl uppercase text-white text-center -mt-40'>Salads</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider2} alt="" />
                <h4 className='text-3xl uppercase text-white text-center -mt-40'>Pizzas</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider3} alt="" />
                <h4 className='text-3xl uppercase text-white text-center -mt-40'>Soups</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider4} alt="" />
                <h4 className='text-3xl uppercase text-white text-center -mt-40'>Dessserts</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider1} alt="" />
                <h4 className='text-3xl uppercase text-white text-center -mt-40'>Salads</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider2} alt="" />
                <h4 className='text-3xl uppercase text-white text-center -mt-40'>Pizzas</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider3} alt="" />
                <h4 className='text-3xl uppercase text-white text-center -mt-40'>Soups</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider4} alt="" />
                <h4 className='text-3xl uppercase text-white text-center -mt-40'>Dessserts</h4>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;