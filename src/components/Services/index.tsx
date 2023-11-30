interface Props {
  services: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  }[];
}

export const Services = ({ services }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services?.map((service) => (
        <div
          className="p-4 rounded-lg shadow-md flex flex-col items-center"
          style={{ backgroundColor: "var(--secondary-color)" }}
        >
          <img
            src={service?.imageUrl}
            alt={service?.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h3
            className="font-bold text-xl mb-3 mt-4"
            style={{ color: "var(--primary-color)" }}
          >
            {service?.name}
          </h3>
          <p className="text-center" style={{ color: "var(--text-color)" }}>
            {service?.description}
          </p>
        </div>
      ))}
    </div>
  );
};
