
import { toast } from 'react-toastify';

const Home = () => {

    const notify = () => toast.info("Wow so easy!",{theme: "colored"});
    return (
        <div>
            <button className='btn' onClick={notify}>Notify!</button>
        </div>
    );
};

export default Home;