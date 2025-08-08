const FeatureCard = ({ image, title, description }) => (
  <div style={{ textAlign: "center", padding: "20px", maxWidth: "300px" }}>
    <img src={image} alt={title} style={{ height: "50px", marginBottom: "16px" }} />
    <h3>{title}</h3>
    <p className="text-muted" style={{ color: "#666" , fontSize:'13px'}}>{description}</p>
  </div>
);

export default FeatureCard;
