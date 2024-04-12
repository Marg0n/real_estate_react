
import { PropTypes } from 'prop-types';
import SingleCard from "./SingleCard";


const Cards = ({ estates }) => {


  // const { bookId } = books;
  console.log(estates)

  return (
    <div

      className="grid md:grid-cols-3 gap-8"
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
