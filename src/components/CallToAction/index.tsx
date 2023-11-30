interface Props {
  text: string;
  textButton: string;
  href: string;
}

export const CallToAction = ({ text, textButton, href }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "var(--secondary-color)",
        padding: "1.5rem",
        marginTop: "2rem",
      }}
    >
      <div className="text-center">
        <h3
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text-color)" }}
        >
          {text}
        </h3>
        <a
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--text-color)",
          }}
          href={href}
          className="px-6 py-2 rounded hover:bg-yellow-600 transition duration-300 ease-in-out"
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent-color)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--primary-color)")
          }
        >
          {textButton}
        </a>
      </div>
    </div>
  );
};
