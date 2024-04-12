
// import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import Estates from '../../components/Estates';
import Slider from '../../components/Slider';

const Home = () => {

    // const notify = () => toast.info("Wow so easy!", { theme: "colored" });
    const estates = useLoaderData();

    return (
        <div className=''>
            {/* <button className='btn' onClick={notify}>Notify!</button> */}
            <div className='max-h-96'>
                <Slider />
            </div>
            <div className='my-8'>
                <h3 className='text-center text-2xl font-bold mb-8'>Hot Destination</h3>
                <Estates estates={estates} />
            </div>
        </div>
    );
};

export default Home;