import { useState } from "react";
import { patchArticle } from "../../Utils/api";

const Votes = ({ newArticle }) => {
  const originalVote = newArticle.votes;
  const [newVotes, setNewVotes] = useState(originalVote);
  const [voteChange, setVoteChange] = useState(0);
  const [err, setErr] = useState(null);

  const updateVotes = (changeValue) => {
    if (voteChange === 0) {
      patchArticle(newArticle.article_id, changeValue)
        .then(() => {
          setNewVotes(newVotes + changeValue);
          setVoteChange(changeValue);
          setErr(null);
        })
        .catch((error) => {
          setNewVotes(newVotes);
          setVoteChange(0);
          setErr("Something went wrong, please try again.");
        });
    } else if (voteChange === changeValue) {
      patchArticle(newArticle.article_id, -changeValue)
        .then(() => {
          setNewVotes(newVotes - changeValue);
          setVoteChange(0);
          setErr("Something went wrong, please try again.");
        })
        .catch((error) => {
          setNewVotes(newVotes);
          setVoteChange(0);
          setErr("Something went wrong, please try again.");
        });
    }
  };

  const votes = newArticle.votes;
  const votingText = votes + voteChange;

  return (
    <div className="votesBox">
      <p className="vote">Vote</p>
      <button onClick={() => updateVotes(1)} disabled={voteChange === -1}>
        {" "}
        +{" "}
      </button>
      {votingText}
      <button onClick={() => updateVotes(-1)} disabled={voteChange === 1}>
        {" "}
        -{" "}
      </button>
      {err && <p>{err}</p>}
    </div>
  );
};

export default Votes;
