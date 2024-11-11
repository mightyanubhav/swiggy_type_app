const Shimmer = () => {
    const shimmerCards = Array(30).fill(null); // Create an array with 27 empty elements
    return (
      <div className="shimmer">
        {shimmerCards.map((_, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;