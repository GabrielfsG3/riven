import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import "./index.css";

export default function Products() {

    return (
        <nav className="products-container">
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1}
                }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                <SwiperSlide><div className="card">Produto 1</div></SwiperSlide>
                <SwiperSlide><div className="card">Produto 2</div></SwiperSlide>
                <SwiperSlide><div className="card">Produto 3</div></SwiperSlide>
                <SwiperSlide><div className="card">Produto 4</div></SwiperSlide>
            </Swiper>
        </nav>

    );
}