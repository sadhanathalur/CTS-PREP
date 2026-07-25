import React from "react";

import { ListofPlayers, Scorebelow70 } from "./Components/ListofPlayers";

import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers,
} from "./Components/IndianPlayers";

function App() {

  let flag = true;

  if (flag) {
    return (
        <div>

          <ListofPlayers />

          <hr />

          <Scorebelow70 />

        </div>
    );
  }

  return (
      <div>

        <h2>Odd Team Players</h2>

        <OddPlayers
            IndianTeam={[
              "Sachin",
              "Dhoni",
              "Virat",
              "Rohit",
              "Yuvraj",
              "Raina",
            ]}
        />

        <hr />

        <h2>Even Team Players</h2>

        <EvenPlayers
            IndianTeam={[
              "Sachin",
              "Dhoni",
              "Virat",
              "Rohit",
              "Yuvraj",
              "Raina",
            ]}
        />

        <hr />

        <h2>List of Indian Players Merged</h2>

        <ListofIndianPlayers IndianPlayers={IndianPlayers} />

      </div>
  );
}

export default App;