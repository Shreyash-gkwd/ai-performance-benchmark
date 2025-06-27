import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PerformanceChart from './components/PerformanceChart';
import ComparisonTable from './components/ComparisonTable';
import CodeComparison from './components/CodeComparison';
import InteractiveDemo from './components/InteractiveDemo';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
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