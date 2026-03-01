import { useYearsOfExperience } from "../utils/experience";
import { useInView } from "../hooks/useInView";

export default function Stats() {
  const yearsOfExperience = useYearsOfExperience();
  const { ref, isInView } = useInView<HTMLElement>();

  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Contracts", value: "50+" },
    { label: "TVL", value: "$10M+" },
    { label: "Years", value: yearsOfExperience },
  ];

  return (
    <section
      ref={ref}
      className={`stats-section animate-on-scroll ${isInView ? "visible" : ""}`}
    >
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
