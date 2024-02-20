import { memo } from "react";

const Button = ({ handleClick, children }) => {
  console.log("Button Component Renders - ", { children });

  return <button
  onClick={handleClick}>
  {children}</button>;
};


const ButtonComponent = memo(Button)
export default ButtonComponent