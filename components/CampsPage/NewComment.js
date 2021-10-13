import { Button } from "../index";
import { useGlobalContext } from "../../context/context";
import { useSession } from "next-auth/client";
import { useState } from "react";
import moment from "moment";

const NewComment = ({ reviewList, setReviewList }) => {
  const { setAddComment } = useGlobalContext();
  const [session] = useSession();
  const [textValue, setTextValue] = useState("");

  const addReview = (e) => {
    e.preventDefault();
    const newReviewList = {
      name: session.user.name,
      info: textValue,
      info: textValue,
      time: moment().startOf("second").fromNow(),
    };
    setReviewList([...reviewList, newReviewList]);
    reviewList.push(newReviewList);

    setAddComment(false);
  };

  return (
    <div className="new-comment">
      <h2>Add New Comment</h2>
      <form className="form" onSubmit={addReview}>
        <div className="flex-ac">
          <label>Description</label>
          <textarea
            placeholder="This was probably the best camp I've visited this year..."
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </div>
        <Button title="Post Comment" />
      </form>
    </div>
  );
};

export default NewComment;
