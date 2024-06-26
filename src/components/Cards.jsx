
import { PropTypes } from 'prop-types';
import SingleCard from "./SingleCard";


const Cards = ({ estates }) => {


  // const { bookId } = books;


  return (
    <div

      className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
    >
      {
        estates.map((estate, idx) => (
          <SingleCard key={idx} estate={estate} />
        ))
      }

    </div>
  );
};

Cards.propTypes = {
    estates: PropTypes.array,
}


export default Cards;
