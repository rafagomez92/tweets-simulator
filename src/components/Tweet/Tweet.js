import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import moment from "moment";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

import './Tweet.scss';

function Tweet(props) {
    const {
        tweet: {name, tweet, time},
        index,
        deleteTweet
    } = props;
    console.log(name);
    return(
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon onClick={() => deleteTweet(index)} />
                </div>
                <p>{tweet}</p>
                <div className="tweet__date-add-tweet">
                    {moment(time).format('DD/MM/YYYY HH:mm')}
                </div>
            </CardContent>            
        </Card>
    )
}

export default Tweet;


