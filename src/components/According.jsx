import { Fade } from "react-awesome-reveal";
import AnimationLearn from '../animation/AnimationLearn';

const According = () => {
    return (
        <div className='my-20 w-[90%] mx-auto'>
            
                <h2 className='text-3xl fontLarge font-medium text-center mb-10'><Fade delay={1e3} cascade damping={1e-1}>Learn More Our Product</Fade></h2>
            
            <div className='  flex gap-10 items-start'>
                {/* Animation Parts */}
                <div className='w-2/5'><AnimationLearn /></div>
                {/* According Parts */}
                <div className='w-1/2'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How do I customize my order?
                        </div>
                        <div className="collapse-content">
                            <p> We offer customization options for most of our products. Simply contact us with your requirements, and we&lsquo;ll work with you to create a customized order that suits your needs.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What is the processing time for made-to-order items?
                        </div>
                        <div className="collapse-content">
                            <p> Made-to-order items usually have a processing time of [processing_time]. This time allows us to craft your item with care and attention to detail.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Do you offer gift wrapping services?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we offer gift wrapping services for your convenience. During checkout, you can select the gift wrapping option and include a personalized message.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I track my order?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! Once your order has been shipped, we&lsquo;ll provide you with a tracking number. You can use this number to track your order&lsquo;s progress until it reaches your doorstep.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default According;