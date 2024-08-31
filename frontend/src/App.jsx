import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { PaginationWithBackEnd } from "./PaginationWithBackEnd";
import { Create } from "./Create";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Update } from "./Update";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <ToastContainer />
      <Routes>
        <Route path="/" element={<PaginationWithBackEnd />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
