import React from "react";

const Congrats = props => {
  return props.success ? (
    <div id={"congrats-alert"}>Congratulations! You guessed the word!</div>
  ) : null;
};

export default Congrats;
