import { Outlet } from "react-router-dom";
import "./App.scss";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Roboto Serif",
        },
      }}
    >
      <div className="App">
        <Outlet />
      </div>
    </ConfigProvider>
  );
}

export default App;
