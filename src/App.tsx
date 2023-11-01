import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import ContentProfile from "./components/ContentProfile";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ContentProfile />
      </div>
    </Provider>
  );
};

export default App;
