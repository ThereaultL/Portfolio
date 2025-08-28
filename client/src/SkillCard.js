export default function SkillCard({ language, description }) {
  return (
    <div className="skill-card">
      <h2>{language}</h2>
      <p>{description}</p>
    </div>
  );
}
