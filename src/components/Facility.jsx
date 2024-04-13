
import { PropTypes } from 'prop-types';

const Facility = ({ facility }) => {
    return (
        <p className='flex gap-1 flex-col '>
            <i className='bg-blue-100 min-w rounded-2xl py-1 px-2 m-1 text-blue-600'>
                #{facility}
            </i>
        </p>
    );
};

Facility.propTypes = {
    facility: PropTypes.string,
}

export default Facility;