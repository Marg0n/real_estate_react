
import { PropTypes } from 'prop-types';

const Tag = ({ facility }) => {
    return (

        <i className='bg-blue-100 min-w rounded-2xl py-1 px-2 m-1 text-blue-600'>
            #{facility}
        </i>

    );
};

Tag.propTypes = {
    facility: PropTypes.string,
}

export default Tag;