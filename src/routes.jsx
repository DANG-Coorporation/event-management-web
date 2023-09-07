import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import "./style.css";
import { Box } from "@chakra-ui/react";
import Discovery from "./pages/dicovery/discovery";
import CreateEvent from "./pages/createEvent";
import PaymentTicketSelection from "./pages/purchase/purchase-ticket";
import LoginPage from "./pages/Login/logIn";
import WithNavFooter from "./components/form/withNavFooter/withNavFooter";
import RatingPage from "./pages/rating/ratingPage";
export default function RouteList() {
  return (
    <Box className="app-container">
      <Routes>
        <Route
          path="/create-event"
          element={<WithNavFooter element={<CreateEvent />} />}
        />
        <Route path="/" element={<WithNavFooter element={<Home />} />} />
        <Route
          path="/discovery"
          element={<WithNavFooter element={<Discovery />} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/payment" element={<PaymentTicketSelection />} />
        <Route path="/logIn" element={<LoginPage />} />
        <Route
          path="/rating"
          element={<WithNavFooter element={<RatingPage />} />}
        />
      </Routes>
    </Box>
  );
}
