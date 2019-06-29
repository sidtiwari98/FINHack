import React from 'react';
import Swiper from 'swiper';
import CardPremium from '../../components/CardPremium/CardPremium'


export default class CardPage extends React.Component {
    async componentDidMount() {
        let swiper = new Swiper(this.swiper, {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <CardPremium
                     />
                <CardPremium
                    />


                <CardPremium
                     />

            </div>
        );

    }
}