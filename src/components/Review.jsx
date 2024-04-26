import Marquee from "react-fast-marquee";
import SingleReview from "./SingleReview";
import { Fade } from "react-awesome-reveal";

const Review = () => {
    const rahim = {
        name:"Ab Rahim",
        review:"I've been using this product for a while now, and I couldn't be happier. It's reliable, accurate, and easy to operate. The build quality is top-notch, and the price is unbeatable. Highly recommended!",
        img:'https://i.ibb.co/svRvkbh/img1.jpg',
        product:'Embroidery Starter Kit'
    }
    const sagor = {
        name:"Shafiqul Islam Sagor",
        review:"I am very impressed with the quality of this product. It's easy to use, and the features are fantastic. The price is reasonable, and the delivery was quick. Highly recommend!",
        img:'https://i.ibb.co/7Xw7JZk/91-U93-GTi-Du-L.jpg',
        product:'Embroidery Starter Kit'
    }
    const habiba = {
        name:"Al Mujiza Rahman Habiba",
        review:"Absolutely love this product! The design is sleek and stylish, and it works like a charm. The battery life is impressive, and the display is crystal clear. Definitely worth the investment!",
        img:'https://i.ibb.co/1fhnYVr/6465ff10c753e-square.jpg',
        product:'Embroidery Starter Kit'
    }
    const rebeka = {
        name:"Rebeka Sultana",
        review:"Absolutely love this product! The design is sleek and stylish, and it works like a charm. The battery life is impressive, and the display is crystal clear. Definitely worth the investment!",
        img:'https://i.ibb.co/XDyTZh5/cooo.jpg',
        product:'Embroidery Starter Kit'
    }
    return (
        <div className="my-10">
            <h2 className="text-center text-4xl mb-10"><Fade  delay={1e3} cascade damping={1e-1}>Our Product Review</Fade></h2>
            <Marquee>
                <SingleReview data={rahim}/>
                <SingleReview data={sagor}/>
                <SingleReview data={habiba}/>
                <SingleReview data={rebeka}/>
            </Marquee>
        </div>
    );
};

export default Review;