import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 class="container-title">Skills</h2>
      <div class="skills-list">
        <SkillCard language={"JavaScript"} description={"Frontend & Backend"} />
        <SkillCard language={"React.js"} description={"Frontend"} />
        <SkillCard language={"Node.js"} description={"Backend"} />
        <SkillCard language={"HTML"} description={"Frontend"} />
        <SkillCard language={"CSS"} description={"UI/UX"} />
        <SkillCard language={"Java"} description={"Backend"} />
        <SkillCard language={"C"} description={"Backend"} />
        <SkillCard language={"Python"} description={"Backend & Scripting"} />
        <SkillCard language={"Jest"} description={"Testing"} />
      </div>
    </div>
  );
}
