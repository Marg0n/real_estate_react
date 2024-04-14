

import 'animate.css';
import { useLoaderData } from 'react-router-dom';
import Estates from '../../components/Estates';
import Slider from '../../components/Slider';

const Home = () => {

    
    const estates = useLoaderData();

    return (
        <div className=''>
            {/* <button>Notify!</button> */}
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