const SectionTitle = ({ title, desc }) => {
  return (
    <div className="section_title">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="line">
        <img
          src="https://res.cloudinary.com/devr-static-assets-db/image/upload/v1628067381/DevR-portfolio/shapes/line_eiunzr.svg"
          alt="A line containing a star shape"
        />
      </div>
    </div>
  );
};

export default SectionTitle;
