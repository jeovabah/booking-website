import { useState } from "react";
import "tailwindcss/tailwind.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
export const BarberBooking = () => {
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

  const [nameClient, setNameClient] = useState("ROBSON BARBEARIA");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <header className="flex justify-between items-center py-4">
          <h1
            className="text-3xl font-bold"
            style={{ color: "var(--primary-color)" }}
          >
            {nameClient}
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  Nossos Serviços
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section id="booking" className="mt-12">
          <h2
            className="text-2xl font-bold mb-6 inline-block border-b-2"
            style={{ borderBottomColor: "var(--primary-color)" }}
          >
            Agendar um Horário
          </h2>

          {/* Simulate a booking form */}
          <form
            className=" p-4 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-500">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 outline-none"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-500">
                Serviço:
              </label>
              <select
                id="service"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 outline-none"
              >
                <option value="">Selecione um serviço</option>
                {
                  // Loop through the services array
                  services.map((service, index) => (
                    <option key={index}>{service?.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="date-time" className="block text-gray-500">
                Data e Hora:
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Hora"
                dateFormat="d MMMM, yyyy h:mm aa"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 ease-in-out"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--text-color)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--primary-color)")
              }
            >
              Confirmar Agendamento
            </button>
          </form>
        </section>

        <footer
          className="mt-12 text-center"
          style={{ color: "var(--text-color)" }}
        >
          <p>Siga-nos em nossas redes sociais!</p>
          {/* Icons would be placed here */}
        </footer>
      </div>
    </div>
  );
};
