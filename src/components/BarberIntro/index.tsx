import { useState } from "react";
//@ts-ignore
import HeaderImage from "../../assets/header.jpg";
import { TopBanner } from "../TopBanner";
import { Services } from "../Services";
import { Footer } from "../Footer";
import { CallToAction } from "../CallToAction";

export const BarberIntro = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Corte de Cabelo Clássico",
      description: "Um corte clássico...",
      imageUrl:
        "https://img.freepik.com/free-photo/reflection-barber-cutting-man-s-hair-mirror_23-2147839790.jpg?w=900&t=st=1701031257~exp=1701031857~hmac=e963b5693bf4d10af5d8fe6ba33fce19375ffe72073dfc42fbfc1de49924f959",
    },
    {
      id: 2,
      name: "Cuidado com a Barba",
      description: "Cuidados personalizados...",
      imageUrl:
        "https://img.freepik.com/free-photo/reflection-barber-cutting-man-s-hair-mirror_23-2147839790.jpg?w=900&t=st=1701031257~exp=1701031857~hmac=e963b5693bf4d10af5d8fe6ba33fce19375ffe72073dfc42fbfc1de49924f959",
    },
  ]);

  return (
    <div
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto">
        <TopBanner
          image={HeaderImage}
          name="ROBSON BARBEIRO"
          description="Encontre seu estilo com mestres barbeiros."
          servicesDescription="Conheça Nossos Serviços"
        />

        <div className="py-12 px-6">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "var(--primary-color)" }}
          >
            Destaques
          </h2>
          <Services services={services} />
        </div>

        <CallToAction
          text="Pronto para um novo visual?"
          textButton="Agende um Horário"
          href="/booking"
        />

        <Footer />
      </div>
    </div>
  );
};
