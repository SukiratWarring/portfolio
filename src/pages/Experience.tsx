type Role = {
  company: string;
  title: string;
  note?: string;
  period: string;
  location: string;
  description?: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "LYNC",
    title: "Blockchain Developer",
    note: "Blockchain & Backend Engineer",
    period: "Mar 2025 — Present",
    location: "Remote",
    description:
      "Leading development of next-generation DeFi protocols and cross-chain solutions. Contributing to open source projects and building innovative Web3 applications.",
    highlights: [
      "Built Kromosom, an automated cryptocurrency trading platform leveraging machine learning for execution on Hyperliquid and Aster.",
      "Developed a meme token launchpad on Base and Katana using Solidity, ported equivalent functionality to Movement chain with Aptos Move.",
      "Built Solana-based copy trading and sniper bots leveraging websockets and pump.fun SDKs.",
    ],
  },
  {
    company: "Codezeros",
    title: "Blockchain Developer",
    period: "May 2024 — Jan 2025",
    location: "Ahmedabad",
    description:
      "Developing and optimizing smart contracts for various blockchain protocols, focusing on security and performance.",
    highlights: [
      "Developed staking, vesting, DEX, and gaming smart contracts on Supra (MoveVM) using Aptos Move.",
      "Optimized smart contract resource usage and security in non-EVM architectures.",
      "Collaborated with research teams to design efficient on-chain logic and protocol-level improvements.",
    ],
  },
  {
    company: "LBM Solutions",
    title: "Blockchain Developer",
    note: "Blockchain & Backend Engineer",
    period: "Jun 2023 — Jun 2024",
    location: "Mohali",
    description:
      "Building scalable blockchain infrastructure and full-stack dApps with focus on security and performance.",
    highlights: [
      "Developed and audited secure DEX, liquidity pool, and token contracts (ERC-20, ERC-721, ERC-1155).",
      "Managed blockchain infra: node setups, AWS EC2, monitoring with Grafana and Prometheus.",
      "Built backend data pipelines with Node.js, MongoDB, and RabbitMQ for scalable Web3 apps.",
    ],
  },
  {
    company: "WITS Innovation Lab",
    title: "Software Engineer",
    note: "Blockchain Developer",
    period: "Apr 2022 — May 2023",
    location: "Hybrid",
    description:
      "Developing secure smart contracts and integrating blockchain solutions into enterprise applications.",
    highlights: [
      "Developed secure, upgradeable Solidity contracts (ERC-20, ERC-721, ERC-1155) deployed to Polygon mainnet.",
      "Implemented full smart contract workflows with Hardhat, Chai, Mocha, and ethers.js.",
      "Integrated Chainlink oracles and Web3 infra (Moralis, Alchemy) for scalable cross-chain dApps.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-header">
        <div className="experience-label">EXPERIENCE</div>
        <h1 className="experience-title">Professional Journey</h1>
        <p className="experience-subtitle">
          Building innovative blockchain solutions across leading Web3 companies
        </p>
      </div>
      <div className="experience-timeline">
        {roles.map((r) => (
          <div className="experience-entry" key={r.company + r.title}>
            <div className="timeline-marker"></div>
            <div className="experience-entry-content">
              <div className="experience-entry-left">
                <h2 className="experience-job-title">{r.title}</h2>
                <div className="experience-company">{r.company}</div>
                <div className="experience-meta">
                  <div className="experience-meta-item">
                    <svg
                      className="experience-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{r.period}</span>
                  </div>
                  <div className="experience-meta-item">
                    <svg
                      className="experience-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{r.location}</span>
                  </div>
                </div>
              </div>
              <div className="experience-entry-right">
                {r.description && (
                  <p className="experience-description">{r.description}</p>
                )}
                <h3 className="experience-achievements-title">
                  Key Achievements:
                </h3>
                <ul className="experience-achievements">
                  {r.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
