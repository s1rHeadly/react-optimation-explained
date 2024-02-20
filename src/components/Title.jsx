import { memo } from "react";
const Title = () => {

    console.log("Title Component is rendered");
    return (
      <h1>useCallback Hook.</h1>
    );
}


const TitleComponent = memo(Title);
export default TitleComponent