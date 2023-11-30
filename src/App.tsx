import { RoutesComponent } from "./Routes/RoutesComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <BarberIntro />
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
    // <BarberBooking />
  );
}

export default App;
