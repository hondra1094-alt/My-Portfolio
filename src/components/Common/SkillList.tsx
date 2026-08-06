const SkillList = ({ skills }: { skills: string[] }) => (
  <ul className="flex flex-wrap gap-2.5">
    {skills.map((skill) => (
      <li
        key={skill}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
      >
        {skill}
      </li>
    ))}
  </ul>
);

export default SkillList;
