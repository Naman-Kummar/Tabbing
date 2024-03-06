import React, { useState } from "react";
import "./App.css";
import { tabs } from "./tabs";

function App() {
  let [activeTabs, setactiveTabs] = useState(0);
  let [activecontent, setactivecontent] = useState(tabs[0]);
  let changeData = (index) => {
    setactiveTabs(index);
    setactivecontent(tabs[index]);
  };

  return (
    <div className="outertab">
      <h1>Laq prep Vision Mission Values</h1>
      <ul>
        {tabs.map((tabsItems, index) => {
          return (
            <li>
              <button
                onClick={() => changeData(index)}
                className={activeTabs == index ? "activeBtn" : ""}
              >
                {tabsItems.title}
              </button>
            </li>
          );
        })}
      </ul>
      {activecontent !== undefined ? <p>{activecontent.description}</p> : ""}
    </div>
  );
}

export default App;
