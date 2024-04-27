
import { useContext } from "react";
import According from "../components/According";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Review from "../components/Review";
import { ApiContext } from "../context/Context";


const Home = () => {
    const {user} = useContext(ApiContext)
    console.log(user);
    return (
        <div>
            <Banner/>
            <CardSection/>
            <According/>
            <Review/>
        </div>
    );
};

export default Home;