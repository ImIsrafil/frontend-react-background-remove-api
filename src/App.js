import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UploadFile from "./components/UploadFile";
import NoBackground from "./components/NoBackground";
import { useState } from "react";

function App() {
  const [imageName, setImageName] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<UploadFile setImageName={setImageName} />}
          />
          <Route
            path="/background"
            element={<NoBackground imageName={imageName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
