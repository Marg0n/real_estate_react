import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import pic1 from '../assets/real-estate-indoor.jpg';
import pic2 from '../assets/real-estate-luxury-outdoor.jpg';
import pic3 from '../assets/real-estate-luxury-vila.jpg';
import pic4 from '../assets/real-estate-luxury-window-vila.jpg';


const Slider = () => {



    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img  className=' w-full'src={pic1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  className=' w-full'src={pic2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  className=' w-full'src={pic3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  className=' w-full'src={pic4} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;