import { useEffect, useState } from "react";
import Block from "./Block";

const Board = () => {
  const [mark, setmark] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(2);
  const [winner, setWinner] = useState(0);

  useEffect(() => {
    const comination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let c of comination) {
      if (mark[c[0]] === 1 && mark[c[1]] === 1 && mark[c[2]] === 1) {
        setWinner(2);
      }
      if (mark[c[0]] === 2 && mark[c[1]] === 2 && mark[c[2]] === 2) {
        setWinner(1);
      }
    }
  }, [mark]);

  const changeMark = (i) => {
    const m = [...mark];

    if (m[i] === 0) {
      m[i] = player;
      setmark(m);
      setPlayer(player === 2 ? 1 : 2);
    }
  };

  return (
    <div className="Board">
      {winner ? <div>winner is Player: {winner}</div> : null}
      <div>
        <Block mark={mark[0]} changeMark={changeMark} position={0}></Block>
        <Block mark={mark[1]} changeMark={changeMark} position={1}></Block>
        <Block mark={mark[2]} changeMark={changeMark} position={2}></Block>
      </div>
      <div>
        <Block mark={mark[3]} changeMark={changeMark} position={3}></Block>
        <Block mark={mark[4]} changeMark={changeMark} position={4}></Block>
        <Block mark={mark[5]} changeMark={changeMark} position={5}></Block>
      </div>
      <div>
        <Block mark={mark[6]} changeMark={changeMark} position={6}></Block>
        <Block mark={mark[7]} changeMark={changeMark} position={7}></Block>
        <Block mark={mark[8]} changeMark={changeMark} position={8}></Block>
      </div>
    </div>
  );
};

export default Board;
