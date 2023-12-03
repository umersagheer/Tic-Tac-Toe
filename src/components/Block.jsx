const Block = ({ mark, changeMark, position }) => {
  return (
    <div
      className={`Block mark${mark}`}
      onClick={(e) => changeMark(position)}
    ></div>
  );
};

export default Block;
