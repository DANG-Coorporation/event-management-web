import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import WebNavbar from "./components/form/webNavbar/webNavbar";
import "./style.css";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Discovery from "./pages/dicovery/discovery";
import CreateEvent from "./pages/createEvent";

import WebFooter from "./components/form/webFooter/webFooter";
export default function RouteList() {
  const isBlacken = useSelector((state) => state.screenDarken.isScreenDarken);

  return (
    <Box className='app-container'>
      <WebNavbar />
      <Box className='content-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discovery' element={<Discovery />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/create-event' element={<CreateEvent />} />
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
