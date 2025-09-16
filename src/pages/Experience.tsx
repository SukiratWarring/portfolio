type Role = {
  company: string;
  title: string;
  note?: string;
  period: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "LYNC (Remote)",
    title: "Blockchain Developer",
    note: "Blockchain & Backend Engineer",
    period: "Mar 2025 — Present",
    highlights: [
      "Developed a meme token launchpad on Base and Katana using Solidity, ported equivalent functionality to Movement chain with Aptos Move.",
      "Engineered a production-grade Aptos blockchain indexer for real-time analytics and scalable DeFi/gaming integrations.",
      "Built Solana-based copy trading and sniper bots leveraging websockets and pump.fun SDKs.",
    ],
  },
  {
    company: "Codezeros (Ahmedabad)",
    title: "Blockchain Developer",
    period: "May 2024 — Jan 2025",
    highlights: [
      "Developed staking, vesting, DEX, and gaming smart contracts on Supra (MoveVM) using Aptos Move.",
      "Optimized smart contract resource usage and security in non-EVM architectures.",
      "Collaborated with research teams to design efficient on-chain logic and protocol-level improvements.",
    ],
  },
  {
    company: "LBM Solutions (Mohali)",
    title: "Blockchain Developer",
    note: "Blockchain & Backend Engineer",
    period: "Jun 2023 — Jun 2024",
    highlights: [
      "Developed and audited secure DEX, liquidity pool, and token contracts (ERC-20, ERC-721, ERC-1155).",
      "Managed blockchain infra: node setups, AWS EC2, monitoring with Grafana and Prometheus.",
      "Built backend data pipelines with Node.js, MongoDB, and RabbitMQ for scalable Web3 apps.",
    ],
  },
  {
    company: "WITS Innovation Lab (Hybrid)",
    title: "Software Engineer",
    note: "Blockchain Developer",
    period: "Apr 2022 — May 2023",
    highlights: [
      "Developed secure, upgradeable Solidity contracts (ERC-20, ERC-721, ERC-1155) deployed to Polygon mainnet.",
      "Implemented full smart contract workflows with Hardhat, Chai, Mocha, and ethers.js.",
      "Integrated Chainlink oracles and Web3 infra (Moralis, Alchemy) for scalable cross-chain dApps.",
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>
      {roles.map((r) => (
        <article className="role" key={r.company + r.title}>
          <header>
            <h2>
              {r.title}{" "}
              {r.note && <span className="role-note">({r.note})</span>}
            </h2>
            <div className="meta">
              <span>{r.company}</span> · <span>{r.period}</span>
            </div>
          </header>
          <ul>
            {r.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
