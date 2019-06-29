import React from 'react';
import CardPremium from '../../components/CardPremium/CardPremium'
import Button from '../../components/Button/button'
import axios from 'axios';
const API_URL = 'http://p2pi.tech:6969';


export default class CardPage extends React.Component {

    constructor(props) {
        super(props)
        this.cardSelected = this.cardSelected.bind(this)
        this.state = {
            flag: false,
            counter:0,
            cardData: []
        }
    }

    async componentWillMount (){
        console.log("IDHAR HUN MKL");
        const url = `${API_URL}/v1/get_pools`;
        await axios.get(url).then(response => response.data)
        .then((data) => {
        this.setState({ cardData: data })
        console.log("kfnfdksnfd", data)
        console.log(">>>>>>>>>>>>>>>>>>",this.state.cardData)
        })
    }

    cardSelected() {
        this.setState({
            flag: !this.state.flag,
            counter:this.state.counter+1
        })
    }
    render() {
        if (this.state.flag == false && this.state.counter<2) {
            return (
                <div>
                    <div style={{
                        textAlign: "center",
                        padding: "50px",
                    }}>
                        <p style={{ color: "black", fontSize: "48px", fontFamily: "Verdana" }}>Great! Choose your Plan:</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: "20px",
                    }}>
                        <div><CardPremium card={this.state.cardData[0]}/></div>
                        <div onClick={this.cardSelected}><CardPremium  card={this.state.cardData[1]}/></div>
                        <div><CardPremium card={this.state.cardData[2]}/></div>

                    </div>
                </div>
            );
        } else if(this.state.flag==true) {
            return (
                <div>
                    <div
                        style={{ padding: "50px", }}
                    >
                        <br />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: "20px",

                    }}>
                        <div style={{ opacity: 0.2 }}><CardPremium card={this.state.cardData[0]}/></div>
                        <div onClick={this.cardSelected} style={{ boxShadow: "40px" }}><CardPremium card={this.state.cardData[0]}/></div>
                        <div style={{ opacity: 0.2 }}><CardPremium card={this.state.cardData[0]}/></div>
                    </div>
                </div >
            )
        }else{
            return(
                <div>
                    hello
                </div>
            )
        }

    }
}