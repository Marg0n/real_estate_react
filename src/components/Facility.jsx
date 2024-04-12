
import { PropTypes } from 'prop-types';

const Facility = ({facility}) => {
    return (
        <>
            <i className='bg-green-50 rounded-2xl py-1 px-2 mr-4 text-green-600'>#{facility}</i>
        </>
    );
};

Facility.propTypes = {
    facility: PropTypes.string,
}

export default Facility;