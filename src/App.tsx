import React from "react";
import classes from "./App.module.scss";
import { Calculator } from "./components/Calculator/Calculator";

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
