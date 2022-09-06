import {
    BrowserRouter,
    Route,
    Routes,
    Router,
    Switch} from "react-router-dom";
import {HomePage} from "./pages/home-page";
import {Header} from "./components/header";
import {Provider} from "react-redux";
import {store} from "./redux";
import {GamePage} from "./pages/game-page";
import {GameOrder} from "./components/game-order";
import {OrderPage} from "./pages/order-page";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="App">
                  <Header/>
                  <Routes>
                      <Route path="/" element={<HomePage to="/home" />} />
                      <Route path="/app/:title" element={<GamePage to="/app/:title" />} />
                      <Route path="/order" element={<OrderPage to="/order" />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
