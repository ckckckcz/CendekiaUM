import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import App from "./views/App";
import BlogRPL from "./views/News/BlogRPL";
import BlogBahanAjar from "./views/News/BlogBahanAjar";
import BlogVideoPembelajaran from "./views/News/BlogVideoPembelajaran";

const Index = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog/rpl" element={<BlogRPL />} />
      <Route path="/blog/bahanajar" element={<BlogBahanAjar />} />
      <Route path="/blog/videopembelajaran" element={<BlogVideoPembelajaran />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
