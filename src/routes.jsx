import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import WebNavbar from "./components/form/webNavbar/webNavbar";
import "./style.css";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Discovery from "./pages/dicovery/discovery";
import CreateEvent from "./pages/createEvent";

export default function RouteList() {
  const isBlacken = useSelector((state) => state.screenDarken.isScreenDarken);

  return (
    <>
      <WebNavbar />
      <Box className='content-container'>
        <Box className='routes-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/discovery' element={<Discovery />} />
            <Route path='/create-event' element={<CreateEvent />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Box>
        <Box
          className='app-darken'
          display={isBlacken ? "block" : "none"}
          bg={isBlacken ? "rgba(0, 0, 0, 0.4)" : "transparent"}
        />
      </Box>
    </>
    // <BrowserRouter>
    //   <MobileNavbar />
    //   <Routes>
    //     <Route path='/' element={<App />} />
    //     <Route path='/test' element={<Home />} />
    //     <Route path='*' element={<NotFound />} />
    //     <Route path='/create-event' element={<CreateEvent />} />
    //   </Routes>
    // </BrowserRouter>
  );
}
