import { Badge } from "@/components/ui/badge";

const SkillList = ({ skills }: { skills: string[] }) => (
  <ul className="flex flex-wrap gap-2.5">
    {skills.map((skill) => (
      <li key={skill}>
        <Badge
          variant="secondary"
          className="h-auto rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors duration-200 hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-white"
        >
          {skill}
        </Badge>
      </li>
    ))}
  </ul>
);

export default SkillList;
