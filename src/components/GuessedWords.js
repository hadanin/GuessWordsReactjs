import React from "react";

const GuessedWords = props => {
  let contents;
  if (props.guessedWords.length === 0) {
    return <div id={"guess-instruction"}>Try to guess the secret word!</div>;
  } else {
    let guessedWordsRow = props.guessedWords.map((item, index) => {
      return (
        <tr key={index}>
          <td id={"guessed-word"}>{item.guessedWord}</td>
          <td>{item.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div id={"guessed-words"}>
        <h3>Guessed Words</h3>
        <table className={"table table-sm"}>
          <thead className={"thead-light"}>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRow}</tbody>
        </table>
      </div>
    );
  }

  return <div id={"component-guessed-words"}>{contents}</div>;
};

export default GuessedWords;
