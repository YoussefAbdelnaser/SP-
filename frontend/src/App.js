import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Tickets from "./pages/shop/Tickets";
import Reservation from "./pages/reservation/Reservation"
import Payment from "./pages/Payments/Payment"
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
