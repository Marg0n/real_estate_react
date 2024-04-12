
// import { toast } from 'react-toastify';
import Slider from '../../components/Slider';

const Home = () => {

    // const notify = () => toast.info("Wow so easy!", { theme: "colored" });
    return (
        <div className=''>
            {/* <button className='btn' onClick={notify}>Notify!</button> */}
            <div className='max-h-96'>
                <Slider />
            </div>
        </div>
    );
};

export default Home;