const Review = ({ review }) => {
  return (
    <article className="">
      <div className="flex-ac-jb">
        <h4>{review && review.name}</h4>
        <h6>{review && review.time}</h6>
      </div>
      <p>{review && review.info}</p>
    </article>
  );
};

export default Review;
