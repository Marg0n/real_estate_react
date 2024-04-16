

import 'animate.css';
import { useLoaderData } from 'react-router-dom';
import Estates from '../../components/Estates';
import Slider from '../../components/Slider';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/Loader';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const estates = useLoaderData();
    const {loading} = useAuth();

    if (loading) {
        return <Loader/>;
    }

    return (
        <div className=''>
            <Helmet>
                <title>Oasis | Home</title>
            </Helmet>
            <div className='max-h-dvh'>
                <Slider />
            </div>
            <div className='my-12'>
                <h3 className='text-center text-4xl font-bold mb-8 animate__heartBeat'>Hot Destination</h3>
                <Estates estates={estates} />
            </div>
        </div>
    );
};

export default Home;