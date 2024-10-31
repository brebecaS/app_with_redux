import { decrementByOne } from "./conuterSlice";
import { useDispatch } from "react-redux";

const DecrementButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(decrementByOne())}>Decrement by 1</button>
  );
};

export default DecrementButton;
