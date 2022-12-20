import "./App.css";

function App() {
  console.log("Window", window.sailConfig);
  return (
    <div className="App">
      <p>{window.envConfig.title}</p>
    </div>
  );
}

export default App;
