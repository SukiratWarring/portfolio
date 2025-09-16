type Project = {
  name: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: "Pollux Blockchain",
    description:
      "Delegated Proof of Stake (DPoS) Layer 1 blockchain with EVM compatibility and built-in governance. Includes validator ecosystem with 27 Super Representatives. With tvl of $10M+.",
    tech: ["Ec2 instance", "Java", "Docker", "CI/CD"],
    links: [{ label: "Docs", href: "https://polluxchain.com/Whitepaper.pdf" }],
  },
  {
    name: "Meme Token Launchpad",
    description:
      "A launchpad for creating and graduating meme tokens following the AMM model.Includes automated liquidity pool setup, trading pair creation, and built-in security checks for safe launches.",
    tech: ["Solidity", "Hardhat", "Node.js", "The Graph"],
    links: [{ label: "Live", href: "https://mew.gg" }],
  },
  {
    name: "Explorer",
    description:
      "Blockchain explorer for the Pollux network featuring transaction tracking, account balances, validator stats, and governance proposals. Powered by real-time indexing with ZeroMQ and RabbitMQ.",
    tech: ["Node.js", "MongoDB", "RabbitMQ", "ZeroMQ", "Microservices"],
    links: [{ label: "Live", href: "https://poxscan.io/" }],
  },
];

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="cards">
        {projects.map((p) => (
          <article className="card" key={p.name}>
            <h2>
              {(() => {
                const live =
                  p.links?.find((l) => l.label.toLowerCase() === "live") ||
                  p.links?.[0];
                return live ? (
                  <a
                    href={live.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-title-link"
                  >
                    {p.name}
                    <svg
                      className="external-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M14 5h5v5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 14l9-9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  p.name
                );
              })()}
            </h2>
            <p>{p.description}</p>
            <div className="tech">
              {p.tech.map((t) => (
                <span className="badge" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {/* Links hidden as requested; the title remains clickable */}
          </article>
        ))}
      </div>
    </section>
  );
}
