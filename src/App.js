import "./App.css";
import {SeeAllInsightsCard } from "@stylumia/core-ui";

function App() {
  console.log("Window", window.sailConfig);
  return (
    <div className="App">
      <p>{window.envConfig.title}</p>

      <SeeAllInsightsCard
  className=" "
  insights_numbers={13}
  onClick={() => {}}
  onClickSeeAll={function noRefCheck() {}}
/>
    </div>
  );
}

export default App;
