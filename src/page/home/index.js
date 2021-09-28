import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/button";
import { addCommentThunk } from "../../store/modules/user/thunks";

export const Home = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleButton = () => {
    dispatch(addCommentThunk(input));
  };
  console.log(user);
  const { comments, name } = user;
  return (
    <div>
      <h1>
        <p> usuario: {name}</p>
        <p>comentário:</p>
        <ul>
          {comments.map((item) => (
            <li key={`${item} - ${comments.length}  `}>{item}</li>
          ))}
        </ul>
      </h1>
      <input
        name="comentario"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button handleClick={handleButton} name="adicionar" />
    </div>
  );
};
