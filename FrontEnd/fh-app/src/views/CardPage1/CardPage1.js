import React, { Component } from 'react';
import CardPremium from '../../components/CardPremium/CardPremium'


class CardPage1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            section2data: [
                {
                    cardContent:"Click to See Offer 1"
                },
                {
                    cardContent:"Click to See Offer 2"
                },
                {
                    cardContent:"Click to see Offer 3"
                }
            ],
            flag:false
        
        }
        this.generateOfferCards = this.generateOfferCards.bind(this);
        this.offerClicked=this.offerClicked.bind(this);
    }

    generateOfferCards(section2data) {
        console.log(section2data)
        return section2data.map((eachInfo, i) => {
            return <div
                key={'questionCard_' + i}
                className='carousel__item swiper-slide'
               
                style={{ marginRight: '15px' }}>
                <div className='card card--question'>
                    <div className='card__container'>
                        <div className='card__content'>
                            <p>{eachInfo.cardContent}</p>
                        </div>
                    </div>
                </div>
                {
                    eachInfo.showLink
                    &&
                    <div className='link link--orange carousel__link mt-3 ml-4'>
                        <a className='link__text' href={eachInfo.link}>View Answers</a>
                    </div>
                }
            </div>
        });
    }

    offerClicked(){
        console.log("clicked")
        this.setState({
            flag:true
        })
    }

    render(){
        let offerCards = this.generateOfferCards(this.state.section2data);
        if(this.state.flag==false){
        return(
            <div className='carousel__container swiper-wrapper ' onClick={this.offerClicked} >
            {offerCards}

            </div>
        )
        }else{
            return(
                <div className='carousel__container swiper-wrapper '
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                <CardPremium/>
                <CardPremium/>
                <CardPremium/>
                <CardPremium/>
                <CardPremium/>
                <CardPremium/>
                
                </div>
            )
        }
    }
}


export default CardPage1