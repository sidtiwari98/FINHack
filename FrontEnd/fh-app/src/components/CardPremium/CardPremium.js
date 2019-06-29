import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fontFamily, textAlign } from '@material-ui/system';

const useStyles = makeStyles({
    card: {
        width: 345,
    },
    media: {
        height: 440,
    },
});
// const  classes = useStyles();
export default class MediaCard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ margin: "10px" }}>
                <Card className={useStyles.card} raised={true}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Your Monthly premium is
                        </Typography>
                            <div style={{
                                display: "flex", flexDirection: "row", justifyContent: "center", margin: "10px",
                                border: "1px solid black", borderRadius: "100px", alignItems: "center"
                            }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    $197.32
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p style={{ margin: "6px" }}> HK$</p>
                                </Typography>
                            </div>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p style={{ textAlign: "center" }}>Enroll Online right now </p>
                            </Typography>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        Buy Now
                                    </Button>
                                </CardActions>
                            </div>
                            <Typography gutterBottom variant="h5" component="h2">
                                Your Quote
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Your Total                               $197.32
                           <p>__________________________________________</p>
                                <p>Total premium                 $197.32</p>
                                <p>Total premium                 $197.32</p>
                            </Typography>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Print
                            </Button>
                            </CardActions>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div onClick={this.boughtOffer}><Button size="small" color="primary">
                            Learn More
                    </Button></div>
                    </CardActions>
                </Card>
            </div >
        );
    }
}