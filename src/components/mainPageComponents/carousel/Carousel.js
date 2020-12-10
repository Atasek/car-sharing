import {Carousel} from "react-bootstrap";
import firstImage from "../../../img/slide11.png";
import secondImage from "../../../img/slide2.png";
import thirdImage from "../../../img/slide3.png";
import fourthImage from "../../../img/slide4.png";
import React from "react";

export default function CustomCarousel() {
    return <Carousel
        indicators={true}
        prevIcon={<span aria-hidden="true" className="carousel__icon carousel__icon_left-arrow"/>}
        nextIcon={<span aria-hidden="true" className="carousel__icon carousel__icon_right-arrow"/>}
    >
        <Carousel.Item>
            <img className="carousel__img"
                 src={firstImage}
                 alt="First slide"
            />
            <Carousel.Caption className="carousel-caption text-left">
                <h3>Бесплатная парковка</h3>
                <p>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а
                    также в аэропортах.</p>
                <button className="carousel__button green">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="carousel__img"
                 src={secondImage}
                 alt="Third slide"
            />
            <Carousel.Caption className="carousel-caption text-left">
                <h3>Страховка</h3>
                <p>Полная страховка автомобиля</p>
                <button className="carousel__button blue">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="carousel__img"
                 src={thirdImage}
                 alt="Third slide"
            />
            <Carousel.Caption className="carousel-caption text-left">
                <h3>Бензин</h3>
                <p>Полный бак на любой заправке города за наш счёт</p>
                <button className="carousel__button pink">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="carousel__img"
                 src={fourthImage}
                 alt="Fourth slide"
            />
            <Carousel.Caption className="carousel-caption text-left">
                <h3>Обслуживание</h3>
                <p>Автомобиль проходит еженедельное ТО</p>
                <button className="carousel__button violet">Подробнее</button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}