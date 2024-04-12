import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Facility from './Facility';

const SingleCard = ({ estate }) => {

    const {id, segment_name, estate_title, image, description, price, status, area, location, facilities} = estate;

    return (
        <Link
            to={`/book/${id}`}
            className="border rounded-xl"
        >

            <div className="card shadow-xl min-h-[80vh]">
                <figure className="mx-8 mt-8 p-8 rounded-xl bg-gray-200">
                    <img
                        src={image}
                        alt="Book image"
                        className="rounded-xl h-56 w-auto"
                    />
                </figure>
                <div className="card-body items-center text-start ">
                    <p className='w-full  '>
                        {
                            facilities.map((facility, idx) => <Facility key={idx} facility={facility} />)
                        }
                    </p>
                    <div className="h-16 w-full space-y-2 mt-4">
                        <h2 className="text-xl font-semibold text-start">{estate_title}</h2>
                        <p className="text-base">Segment : <span className='font-semibold'> {segment_name}</span></p>
                        <p className="text-base">For : <span className='font-semibold'> {status}</span></p>
                    </div>

                    <div className="divider"></div>

                    <div className="w-full flex justify-between">
                        <small className="flex gap-2 items-center">
                            {area}
                        </small>
                        <small className="flex gap-2 items-center">
                            {price}
                            
                        </small>
                    </div>
                </div>
            </div>
        </Link>
    );
};

SingleCard.propTypes = {
    estate: PropTypes.object,
}

export default SingleCard;