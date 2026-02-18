import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import "./index.css";

export default function Products() {

    const products = [
        {
            id: 1,
            name: "Calças",
            image: "/imagens/calca.webp"
        },
        {
            id: 2,
            name: "Camisas",
            image: "/imagens/camisa.webp"
        },
        {
            id: 3,
            name: "Blusas",
            image: "/imagens/blusa.webp"
        },
        {
            id: 4,
            name: "Chapéus",
            image: "/imagens/bucket-hat.jpg"
        }
    ]

    return (
        <nav className="products-container">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1 }
                }}

                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div
                            className="album"
                            style={{ backgroundImage: `url(${product.image})` }}
                        >
                            {product.name}
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </nav>

    );
}