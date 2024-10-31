import { incrementByOne } from "./conuterSlice";
import { useDispatch } from "react-redux";

const IncrementButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(incrementByOne())}>Increment by 1</button>
  );
};

export default IncrementButton;
