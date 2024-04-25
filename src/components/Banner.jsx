import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';









const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/6yvdKJh/00-NA-BEADWORK-03-super-Jumbo.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-3/4 mx-auto">
                                <h1 className="mb-5 text-5xl font-bold fontLarge">Beadwork for the Modern Woman</h1>
                                <p className="mb-5 font-light fontSmall">Discover the essence of feminine elegance with our stunning beadwork collection designed for the modern woman. Each piece is meticulously handcrafted to celebrate your individuality and style. </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/SXCBVLp/Hands-woman-tapestry-Kenyah-East-Kalimantan-Indonesia.webp)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <div className="w-3/4 mx-auto">
                                <h1 className="mb-5 text-5xl font-bold fontLarge"> Handmade Beadwork Creations</h1>
                                <p className="mb-5 font-light fontSmall">Explore our exquisite collection of handmade beadwork, where each piece is meticulously crafted with passion and care. From intricate jewelry to stunning home decor, our unique creations are designed to add a touch of elegance and charm to your life. </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/K9MNq69/Saeed-Waheed-Saeed-Eye-Em-beadworkpatterns-5bb8bae64cedfd0026f5475f.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-3/4 mx-auto">
                                <h1 className="mb-5 text-5xl font-bold fontLarge"> Beadwork for the Modern Woman</h1>
                                <p className="mb-5 fontSmall font-light">Discover the essence of feminine elegance with our stunning beadwork collection designed for the modern woman. Each piece is meticulously handcrafted to celebrate your individuality and style. </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/jrNfkx2/images-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-3/4 mx-auto">
                                <h1 className="mb-5 text-5xl font-bold fontLarge">Handmade Beadwork Creations</h1>
                                <p className="mb-5 fontSmall font-light">Explore our exquisite collection of handmade beadwork, where each piece is meticulously crafted with passion and care. From intricate jewelry to stunning home decor, our unique creations are designed to add a touch of elegance and charm to your life. </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;