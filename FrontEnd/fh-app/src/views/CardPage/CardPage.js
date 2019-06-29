import React from 'react';
import Swiper from 'swiper';
import CardPremium from '../../components/CardPremium/CardPremium'
import Button from '../../components/Button/button'

export default class CardPage extends React.Component {

    constructor(props){
        super(props)
        this.cardSelected=this.cardSelected.bind(this)
        this.state={
            flag:false
        }
    }
    
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
   

    cardSelected(){
        this.setState({
            flag:true
        })
    }
    render() {
        if(this.state.flag==false){
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding:"100px"
            }}>
                <div><CardPremium/></div>
                <div onClick={this.cardSelected}><CardPremium/></div>


                <div><CardPremium/></div>

            </div>
        );
        }else{
            return(
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
           
            
                padding:"90px",
                
            }}>
                <div style={{opacity:0.2}}><CardPremium/></div>
                
                <div onClick={this.cardSelected} style={{boxShadow:"40px"}}><CardPremium/></div>

                
                
                <div style={{opacity:0.2}}><CardPremium/></div>

            </div>
            )
        }

    }
}