import { Routes, Route } from 'react-router-dom';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <div style={{ height: '2500px' }}></div>
    </>
  );
}
