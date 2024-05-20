import Home from "./home/Home";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from "./productPage/ProductPage";
import ProductView from "./productView/ProductView";

export default function Page() {
  return (
    <div>
      <Header></Header>
      <Router>
  
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/product-page/:href" element={<ProductPage />} />
        <Route path="/prodcut-details/:href/:id" element={<ProductView />  } />




      </Routes>

      </Router>
      <Footer> </Footer>
    </div>
  );
}
