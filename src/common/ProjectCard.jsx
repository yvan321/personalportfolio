function ProjectCard({ src, h3, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={src} alt={h3} />
      <h3>{h3}</h3>
    </div>
  );
}

export default ProjectCard;
