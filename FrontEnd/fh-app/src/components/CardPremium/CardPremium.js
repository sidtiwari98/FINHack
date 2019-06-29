import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 345,
    },
    media: {
        height: 440,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <div style={{ margin: "10px" }}>
            <Card className={classes.card} raised={true}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Your Monthly premium is
                        </Typography>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                HK$
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                $197.32
                            </Typography>
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Enroll Online right now
                        </Typography>
                        <CardActions>
                            <Button size="large" color="primary">
                                Buy Now
                            </Button>
                        </CardActions>
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
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}