interface Props {
  image: string;
  name: string;
  description: string;
  servicesDescription: string;
}
export const TopBanner = ({
  image,
  name,
  description,
  servicesDescription,
}: Props) => {
  return (
    <div className="relative">
      <img src={image} alt="Barbearia" className="w-full object-cover h-96" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col p-4">
        <span
          className="font-bold text-3xl sm:text-5xl"
          style={{ color: "var(--primary-color)" }}
        >
          {name}
        </span>
        <p
          className="mt-2 text-center"
          style={{ color: "var(--primary-color)" }}
        >
          {/* Encontre seu estilo com mestres barbeiros. */}
          {description}
        </p>
        <a
          href="#services"
          className="mt-4 px-4 py-2 rounded hover:bg-opacity-80 transition duration-300 ease-in-out"
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
          {/* Conheça Nossos Serviços */}
          {servicesDescription}
        </a>
      </div>
    </div>
  );
};
