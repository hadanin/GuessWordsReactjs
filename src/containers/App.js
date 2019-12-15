import React, { Component } from "react";
import Congrats from "../components/Congrats";
import GuessedWords from "../components/GuessedWords";
import Input from "../containers/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      secretWord: "",
      guessedWords: []
    };
  }

  getLetterMatchCount(guessedWord, secretWord) {
    let array = guessedWord.split("");
    let count = 0;
    array.forEach(element => {
      if (secretWord.indexOf(element) > -1) {
        count++;
      }
    });
    return count;
  }

  componentDidMount() {
    this.setSecretWord("Letter");
  }

  setSecretWord = secretWord => {
    this.setState({ ...this.state, secretWord: secretWord });
  };

  guessWord = guessedWord => {
    if (this.state.secretWord === guessedWord) {
      this.setState({ ...this.state, success: true });
    } else {
      let list = this.state.guessedWords;
      list.push({
        guessedWord: guessedWord,
        letterMatchCount: this.getLetterMatchCount(
          guessedWord,
          this.state.secretWord
        )
      });
      this.setState({ ...this.state, guessedWords: list });
    }
  };

  render() {
    return (
      <div className={"container"}>
        <h2 className={"mt-2"}>Guess the word!</h2>
        <Congrats success={this.state.success} />
        <Input guessWord={this.guessWord} />
        <GuessedWords guessedWords={this.state.guessedWords} />
      </div>
    );
  }
}

export default App;
