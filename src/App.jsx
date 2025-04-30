// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import { Home } from "lucide-react";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/cloud-email" element={<div className="text-center font-semibold text-3xl">Cloud Email</div>} />
          <Route path="/cloud-hosting" element={<div className="text-center font-semibold text-3xl">Cloud Hosting</div>} />
          <Route path="/managed/web" element={<div className="text-center font-semibold text-3xl">Web Management</div>} />
          <Route path="/managed/security" element={<div className="text-center font-semibold text-3xl">Security</div>} />
          <Route path="/managed/database" element={<div className="text-center font-semibold text-3xl">Database Support</div>} />
          <Route path="/account" element={<div className="text-center font-semibold text-3xl">My Account</div>} />
          <Route path="/signin" element={<div className="text-center font-semibold text-3xl">Sign In</div>} />
          <Route path="/login/webmail" element={<div className="text-center font-semibold text-3xl">Web mail login</div>} />
          <Route path="/login/customer" element={<div className="text-center font-semibold text-3xl">Customer login</div>} />
          <Route path="/login/reseller" element={<div className="text-center font-semibold text-3xl">Reseller login</div>} />
          <Route path="/sign-in" element={<div className="text-center font-semibold text-3xl">Sign in page</div>} />
          <Route path="/partner-with-us" element={<div className="text-center font-semibold text-3xl">Partner with us</div>} />
          <Route path="/sales/inquiry" element={<div className="text-center font-semibold text-3xl">Sales Inquiry</div>} />
          <Route path="/cart" element={<div className="text-center font-semibold text-3xl">Cart</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
