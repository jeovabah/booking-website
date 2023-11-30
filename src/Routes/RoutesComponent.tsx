import { Route, Routes } from "react-router-dom";
import { BarberIntro } from "../components/BarberIntro";
import { BarberBooking } from "../pages/BarberBooking";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<BarberIntro />} />
      <Route path="*" element={<BarberIntro />} />
      <Route path="/booking" element={<BarberBooking />} />
    </Routes>
  );
};
