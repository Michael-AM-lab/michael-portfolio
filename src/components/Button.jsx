/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with the supplied ID.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      href={id ? `#${id}` : undefined}
      onClick={(e) => {
        const target = id && document.getElementById(id);

        if (target) {
          e.preventDefault();
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
