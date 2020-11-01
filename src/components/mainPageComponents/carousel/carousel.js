import {Carousel} from "react-bootstrap";
import FirstImageForSlide from "../../../img/slide11.png";
import SecondImageForSlide from "../../../img/slide2.png";
import ThirdImageForSlide from "../../../img/slide3.png";
import FourthImageForSlide from "../../../img/slide4.png";
import React from "react";

export default function CustomCarousel() {
    return <Carousel
        indicators="true"
        prevIcon={<span aria-hidden="true" className="carousel__icon carousel__icon_left-arrow"/>}
        nextIcon={<span aria-hidden="true" className="carousel__icon carousel__icon_right-arrow"/>}
    >
        <Carousel.Item>
            <img className="carousel__img"
                 src={FirstImageForSlide}
                 alt="First slide"
            />
            <Carousel.Caption class="carousel-caption text-left">
                <h3>Бесплатная парковка</h3>
                <p>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а
                    также в аэропортах.</p>
                <button class="carousel__button green">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="carousel__img"
                 src={SecondImageForSlide}
                 alt="Third slide"
            />
            <Carousel.Caption class="carousel-caption text-left">
                <h3>Страховка</h3>
                <p>Полная страховка автомобиля</p>
                <button class="carousel__button blue">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="carousel__img"
                 src={ThirdImageForSlide}
                 alt="Third slide"
            />
            <Carousel.Caption class="carousel-caption text-left">
                <h3>Бензин</h3>
                <p>Полный бак на любой заправке города за наш счёт</p>
                <button class="carousel__button pink">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="carousel__img"
                 src={FourthImageForSlide}
                 alt="Fourth slide"
            />
            <Carousel.Caption class="carousel-caption text-left">
                <h3>Обслуживание</h3>
                <p>Автомобиль проходит еженедельное ТО</p>
                <button class="carousel__button violet">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}