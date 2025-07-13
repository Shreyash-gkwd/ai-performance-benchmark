import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PerformanceChart from './components/PerformanceChart';
import ComparisonTable from './components/ComparisonTable';
import CodeComparison from './components/CodeComparison';
import InteractiveDemo from './components/InteractiveDemo';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Header />
      <Hero />
      <PerformanceChart />
      <ComparisonTable />
      <CodeComparison />
      <InteractiveDemo />
      <UseCases />
      <Footer />
    </div>
  );
}

export default App;