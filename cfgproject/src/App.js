import './App.css';
import ReactDOM from "react-dom/client";
import ErrorPage from './pages/ErrorPage';
import Locations from './pages/Locations';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home page </h1>

      </header>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Locations/>}/>
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>

  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
