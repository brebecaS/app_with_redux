import { incrementByValue as incrementByValueAction } from "./conuterSlice";
import { useDispatch } from "react-redux";

const IncrementByValue = ({ inputValue }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementByValueAction(inputValue))}>
      Increment by input value
    </button>
  );
};

export default IncrementByValue;
