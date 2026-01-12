import { useYearsOfExperience } from "../utils/experience";

export default function Stats() {
  const yearsOfExperience = useYearsOfExperience();
  
  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Contracts", value: "50+" },
    { label: "TVL", value: "$10M+" },
    { label: "Years", value: yearsOfExperience },
  ];

  return (
    <section className="stats-section">
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
