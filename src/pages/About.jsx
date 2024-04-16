import { Helmet } from "react-helmet-async";


const About = () => {
    return (

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <Helmet>
                <title>Oasis | About</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Welcome to Oasis Real Estate</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">At Oasis Real Estate, we are committed to providing exceptional real estate services tailored to meet the diverse needs of our clients. With a passion for excellence and a dedication to customer satisfaction, we strive to be your trusted partner in finding your dream property.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story and Vision</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Our vision at Oasis Real Estate is to redefine the real estate experience by offering personalized services, innovative solutions, and a seamless journey from property search to ownership. We aim to create a welcoming and inclusive environment where every client feels valued and supported throughout their real estate journey.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Properties</h1>
                    <div className="font-normal text-base leading-6 text-gray-600 ">
                        <p>
                            Explore a wide range of properties carefully curated to suit various lifestyles, preferences, and budgets. From luxurious estates to cozy apartments, we have something for everyone. Our extensive collection includes:
                        </p>

                        <p>
                            <span className="font-bold">Hotels: </span>
                            Experience luxury and comfort in our exquisite hotel properties located in prime destinations.
                        </p>
                        <p>
                            <span className="font-bold">Resorts: </span>
                            Escape to paradise with our stunning resort properties offering unparalleled amenities and breathtaking views.
                        </p>
                        <p>
                            <span className="font-bold">Vacation Rentals: </span>
                            Create unforgettable memories with our vacation rental properties perfect for family getaways or romantic retreats.
                        </p>
                        <p>
                            <span className="font-bold">Lodges: </span>
                            Embrace nature and tranquility in our charming lodge properties nestled in scenic surroundings.
                        </p>
                        <p>
                            <span className="font-bold">Guesthouses: </span>
                            Discover warmth and hospitality in our cozy guesthouse properties offering a home away from home experience.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full rounded-3xl" src="https://i.ibb.co/G2xCfZf/interior-design-mountain-view.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Why Choose Oasis Real Estate?</h1>
                    <div className="font-normal text-base leading-6 text-gray-600 ">

                        <p>
                            <span className="font-bold">Exceptional Service: </span>
                            Our dedicated team of real estate professionals is committed to providing personalized assistance and guidance at every step of the way.
                        </p>
                        <p>
                            <span className="font-bold">Expertise: </span>
                            With years of industry experience and in-depth market knowledge, we offer expert advice and insights to help you make informed decisions.
                        </p>
                        <p>
                            <span className="font-bold">Transparency:  </span>
                            We believe in transparency and integrity in all our dealings, ensuring a trustworthy and reliable real estate experience for our clients.
                        </p>
                        <p>
                            <span className="font-bold">Customer Satisfaction: </span>
                            Your satisfaction is our priority. We go above and beyond to exceed your expectations and ensure a seamless and enjoyable real estate journey.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/Fz38g1t/human-celebrating.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-8 pt-12">
                <div className="w-full lg:w-7/12 flex flex-col justify-center items-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Get in Touch</h1>
                    <div className="font-normal text-base leading-6 text-gray-600 ">

                        <p>
                            Ready to embark on your real estate adventure? Contact us today to learn more about our properties, schedule viewings, or discuss your specific requirements. Let Oasis Real Estate be your guide to finding your perfect oasis in the world of real estate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default About;