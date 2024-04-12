
import PropTypes from 'prop-types';
import Cards from './Cards';

const Estates = ({estates}) => {

    

    return (
        <div>
            <Cards estates={estates} />
        </div>
    );
};

Estates.propTypes = {
    estates: PropTypes.array,
}

export default Estates;