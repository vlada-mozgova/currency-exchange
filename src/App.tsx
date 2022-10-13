import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/currency-list" element={<CurrencyPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
