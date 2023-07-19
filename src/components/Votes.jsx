import { useState } from "react";
import { patchArticle } from "../../Utils/api";

const Votes = ({ newArticle }) => {
  const originalVote = newArticle.votes;
  const [newVotes, setNewVotes] = useState(originalVote);
  const [voteChange, setVoteChange] = useState(0);

  const increase = () => {
    if (voteChange === 0) {
      patchArticle(newArticle.article_id, 1);
      setNewVotes(newVotes + 1);
      setVoteChange(1);
    } else if (voteChange === 1) {
      patchArticle(newArticle.article_id, -1);
      setNewVotes(newVotes - 1);
      setVoteChange(0);
    }
  };

  const decrease = () => {
    if (voteChange === 0) {
      patchArticle(newArticle.article_id, -1);
      setNewVotes(newVotes - 1);
      setVoteChange(-1);
    } else if (voteChange === -1) {
      patchArticle(newArticle.article_id, 1);
      setNewVotes(newVotes + 1);
      setVoteChange(0);
    }
  };

  const votes = newArticle.votes;
  const votingText = votes + voteChange;

  return (
    <div className="votesBox">
      <p className="vote">Vote</p>
      <button onClick={() => increase(1)} disabled={voteChange === -1}>
        {" "}
        +{" "}
      </button>
      {votingText}
      <button onClick={() => decrease(-1)} disabled={voteChange === 1}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Votes;
