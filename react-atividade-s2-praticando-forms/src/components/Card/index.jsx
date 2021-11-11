const Card = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.userName}</h3>
      <p>{card.name}</p>
      <p>{card.email}</p>
      <p>{card.password}</p>
    </div>
  );
};

export default Card;
