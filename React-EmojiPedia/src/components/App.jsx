import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function getEmoji(emoji) {
  return (
    <Card
      key={emoji.id}
      id={emoji.id}
      image={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
