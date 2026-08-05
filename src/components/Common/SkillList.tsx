const SkillList = ({ skills }: { skills: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {skills.map((skill) => (
      <li
        key={skill}
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
      >
        {skill}
      </li>
    ))}
  </ul>
);

export default SkillList;
