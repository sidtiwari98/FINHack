import React, {Component} from 'react';
import Swiper from 'swiper';

class InsuranceSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section2data: {
        section2Heading: 'Insurances',
        infoText: 'These are the insursances',
        clickCardsText: 'More Info',
        ButtonText: 'More Info'
      },
    

    };
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

  render() {
    const children = this.props.children;
    console.log(this.state)
    return (
      <section className='section section--grey-bg' >
        <div className='section__container container'>
          <div className='row'>
            <div className='col'>
              <div className='heading heading--with-icon text-center'>
                <h2>{this.state.section2data.section2Heading}
                 
                </h2>
              </div>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col'>

              <div ref={(swiper) => { this.swiper = swiper; }}
                className='swiper-container swiper-container-horizontal'>
               
                {children}
              
              </div>

            </div>
          </div>

          <div className='row mt-4 justify-content-center'>
            <div className='col-auto'>
              <div className='button d-inline-block button--lg-orange'>
                <a href="#" type='button'>{this.state.section2data.ButtonText}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InsuranceSection;
