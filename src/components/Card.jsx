import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";

import { PropTypes } from 'prop-types';
import { TiStarHalfOutline } from "react-icons/ti";
import { Link } from "react-router-dom";




const CardSec = ({ card }) => {
    console.log(card);
    const { NewId, image, customization, item_name, price, processing_time, rating, short_description, stockStatus, subcategory_Name, user_email, user_name } = card
    return (
        <Card className="p-3 bgColor textWhite">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <img src={image} alt="" />
                    </Avatar>
                }
                action={
                    <IconButton className="textWhite" >
                        <TiStarHalfOutline />{rating}
                    </IconButton>
                }
                title={user_name}
                subheader={processing_time}
            />
            <CardMedia
                className="h-80 rounded-lg"
                component="img"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <h2 className="text-3xl mb-2 font-bold fontLarge">{item_name}</h2>
                <h3 className="text-lg mb-2 font-medium fontLarge"><span className="font-bold">Category : </span>{subcategory_Name}</h3>
                <Typography className="text-lg fontSmall textWhite" variant="body2" color="text.secondary">
                    {short_description}
                </Typography>
            </CardContent>
            <CardActions className="flex justify-between">
                <Link className="btn rounded-md bg-teal-700 text-white">View Details</Link>
                <h2 className="text-lg font-bold fontSmall">Price : ${price}</h2>
            </CardActions>
        </Card>
    );
};

export default CardSec;

CardSec.propTypes = {
    card: PropTypes.object
}