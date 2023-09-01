import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import MobileNavbar from "./components/form/mobileNavbar";
import NotFound from "./pages/notfound";
import CreateEvent from "./pages/createEvent";

export default function RouteList() {
  return (
    <BrowserRouter>
      <MobileNavbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/test' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/create-event' element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}
