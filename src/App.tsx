import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ServicePage from "@/pages/ServicePage";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service/:id" element={<ServicePage />} />
    </Routes>
  </Layout>
);

export default App;
