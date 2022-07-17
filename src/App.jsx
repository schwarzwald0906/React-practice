import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const styleSheet = {
    color: `blue`,
    font: `16px`
  };
  return (
    <>
      <h1 style={{ color: `red` }}>こんにちは！</h1>
      <p style={styleSheet}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
