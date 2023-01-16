import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"

import img1 from '../assets/nfts/bighead.svg'
import img2 from '../assets/nfts/bighead-1.svg'
import img3 from '../assets/nfts/bighead-2.svg'
import img4 from '../assets/nfts/bighead-3.svg'
import img5 from '../assets/nfts/bighead-4.svg'
import img6 from '../assets/nfts/bighead-5.svg'
import img7 from '../assets/nfts/bighead-6.svg'
import img8 from '../assets/nfts/bighead-7.svg'
import img9 from '../assets/nfts/bighead-8.svg'
import img10 from '../assets/nfts/bighead-9.svg'

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
    width: 25vw;
    height: 70vh;

    @media (max-width: 70em) {
        height: 60vh;    
    }
    @media (max-width: 64em) {
        width: 30vw;
        height: 50vh;    
    }
    @media (max-width: 48em) {
        width: 40vw;
        height: 50vh;    
    }
    @media (max-width: 30em) {
        width: 60vw;
        height: 45vh;    
    }

    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-color: ${props => props.theme.carouselColor};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    .swiper-button-next {
        color: ${props => props.theme.text};
        right: 0;
        width: 3.5rem;
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &:after {
            display: none;
        }

        @media (max-width: 64em) {
        width: 3rem; 
        }
        @media (max-width: 30em) {
        width: 2rem; 
        }
    }
    .swiper-button-prev {
        color: ${props => props.theme.text};
        left: 0;
        width: 3.5rem;
        transform: rotate(180deg) scale(1, -1);
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &:after {
            display: none;
        }

        @media (max-width: 64em) {
        width: 3rem; 
        }
        @media (max-width: 30em) {
        width: 2rem; 
        }
    }
`

export const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction'
                }}
                scrollbar={{
                    draggable: true
                }}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={img1} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img2} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img3} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img4} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img5} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img6} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img7} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img8} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img9} alt='The Weirdos' /> </SwiperSlide>
                <SwiperSlide> <img src={img10} alt='The Weirdos' /> </SwiperSlide>

            </Swiper>
        </Container>
    )
}
