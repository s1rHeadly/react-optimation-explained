

const Display = ({text, displayvalue}) => {

  console.log("Display Component Rendered ", { displayvalue });

  return (
    <p>
      This persons {text} is {displayvalue}
    </p>
  );
}

export default Display