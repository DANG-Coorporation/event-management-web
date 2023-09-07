import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Attendancefirstpage from "./components/form/attendanceFirstPage/attendanceFirstPage";
import WebFooter from "./components/form/webFooter/webFooter";
import WebNavbar from "./components/form/webNavbar/webNavbar";
import LoginPage from "./pages/Login/logIn";
import CreateEvent from "./pages/createEvent";
import Discovery from "./pages/dicovery/discovery";
import Home from "./pages/home";
import LoadingPage from "./pages/loading/loadingPage";
import NotFound from "./pages/notfound";
import PaymentTicketSelection from "./pages/purchase/purchase-ticket";
import "./style.css";
export default function RouteList() {
  const isBlacken = useSelector((state) => state.screenDarken.isScreenDarken);

  return (
    <Box className='app-container'>
      <WebNavbar />
      <Box className='content-container'>
        <Routes>
          <Route path='/create-event' element={<CreateEvent />} />
          <Route path='/' element={<Home />} />
          <Route path='/discovery' element={<Discovery />} />
          <Route path='/event/:id' element={<Attendancefirstpage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/payment' element={<PaymentTicketSelection />} />
          <Route path='/logIn' element={<LoginPage />} />
          <Route path='/loading' element={<LoadingPage />} />
        </Routes>
        <Box
          className='app-darken'
          display={isBlacken ? "block" : "none"}
          bg={isBlacken ? "rgba(0, 0, 0, 0.4)" : "transparent"}
        />
      </Box>
      <WebFooter />
    </Box>
  );
}
