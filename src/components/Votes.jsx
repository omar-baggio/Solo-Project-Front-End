import { useState } from "react";

const Votes = ({ newArticle }) => {
  const [votes, setVotes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const increase = () => {
    if (!isClicked) {
      setVotes(votes + 1);
      setIsClicked(true);
    }
  };

  const decrease = () => {
    if (!isClicked) {
      setVotes(votes + 1);
      setIsClicked(true);
    }
  };

  return (
    <div className="votesBox">
      <p className="vote">Vote</p>
      <button onClick={increase} disabled={isClicked}>
        {" "}
        +{" "}
      </button>
      {votes}
      <button onClick={decrease} disabled={isClicked}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Votes;
