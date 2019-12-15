import React, { Component, Fragment } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessWord: ""
    };
    this.inputRef = React.createRef();
  }

  onSubmitGuessedWord = e => {
    if (this.inputRef.current.value.length > 0) {
      this.setState({
        guessWord: this.inputRef.current.value
      });
      this.props.guessWord(this.inputRef.current.value);
    }
  };

  render() {
    let contents = this.props.success ? null : (
      <Fragment>
        <input
          id={"word-guess"}
          ref={this.inputRef}
          placeholder={"enter guess"}
          className={"mb-2 mx-sm-3"}
        />
        <button
          className={"btn btn-primary mb-2"}
          id={"guess-word-button"}
          onClick={this.onSubmitGuessedWord}
        >
          Submit
        </button>
      </Fragment>
    );
    return <div>{contents}</div>;
  }
}

export default Input;
