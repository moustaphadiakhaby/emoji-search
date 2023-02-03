const Line = ({ emoji, title }) => {
  return (
    <div className="line">
      <p className="emoji">{emoji}</p>
      <p className="title">{title}</p>
    </div>
  );
};

export default Line;
