import React from 'react';
import CardPremium from '../../components/CardPremium/CardPremium'
import Button from '../../components/Button/button'

export default class CardPage extends React.Component {

    constructor(props) {
        super(props)
        this.cardSelected = this.cardSelected.bind(this)
        this.state = {
            flag: false,
            counter:0
        }
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
                        <div><CardPremium /></div>
                        <div onClick={this.cardSelected}><CardPremium /></div>

                        <div><CardPremium /></div>

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
                        <div style={{ opacity: 0.2 }}><CardPremium /></div>
                        <div onClick={this.cardSelected} style={{ boxShadow: "40px" }}><CardPremium /></div>
                        <div style={{ opacity: 0.2 }}><CardPremium /></div>
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