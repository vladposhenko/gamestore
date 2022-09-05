import {
    BrowserRouter,
    Route,
    Routes,
    Router,
    Switch} from "react-router-dom";
import {HomePage} from "./pages/home-page";
import {Header} from "./components/header";

function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage to="/home" />} />
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
