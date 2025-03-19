import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../Constants";

const CustomerReviews = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 justify-items-center items-center">
      <div className="col-span-1 xl:col-span-2 text-center mx-auto max-w-2xl">
        <h1 className="text-4xl font-palanquin font-bold">
          What Our <span className="text-coral-red"> Customers</span> Say?
        </h1>
        <p className="text-slate-gray text-center font-montserrat text-lg mt-4">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      {reviews.map((review, index) => (
        <CustomerReviewCard
          key={index}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}
    </div>
  );
};

export default CustomerReviews;
