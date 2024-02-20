
import { memo } from "react";
const Display = ({text, displayvalue}) => {

  console.log("Display Component Rendered ", { displayvalue });

  return (
    <p>
      This persons {text} is {displayvalue}
    </p>
  );
}

const DiplayComponent = memo(Display);

export default DiplayComponent;