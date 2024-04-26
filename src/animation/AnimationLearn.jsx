import Lottie from "lottie-react";
import animation from '../../public/Learn.json';

const AnimationLearn = () => {
    return (
        <Lottie className="rounded-md" animationData={animation} loop={true} />
    );
};

export default AnimationLearn;