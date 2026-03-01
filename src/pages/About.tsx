import { useYearsOfExperience } from "../utils/experience";
import { useInView } from "../hooks/useInView";

export default function About() {
  const yearsOfExperience = useYearsOfExperience();
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`about-section animate-on-scroll ${isInView ? "visible" : ""}`}
    >
      <h1>About Me</h1>
      <p>
        I'm a <strong>Blockchain & Backend Engineer</strong> with {yearsOfExperience} years of
        experience designing and building decentralized systems and scalable
        backend services. My work spans multiple ecosystems including{" "}
        <strong>EVM (Ethereum, BSC)</strong>, <strong>TVM (Tron)</strong>,{" "}
        <strong>SVM (Solana)</strong>, and <strong>MoveVM (Aptos, Sui)</strong>.
        I specialize in smart contract development, protocol integrations,
        microservices architecture, and full-stack dApp design — always with a
        strong focus on security, scalability, and performance.
      </p>
      <ul>
        <li>
          <strong>Smart Contracts:</strong> Solidity, Move, Anchor (Solana),
          Foundry, Hardhat, OpenZeppelin
        </li>
        <li>
          <strong>Backend & Services:</strong> Node.js/TypeScript, Express,
          GraphQL, MongoDB/PostgreSQL, ZeroMQ, RabbitMQ, microservices
        </li>
        <li>
          <strong>Frontend:</strong> React, Next.js, wagmi/viem, ethers.js
        </li>
        <li>
          <strong>Infrastructure & Cloud:</strong> IPFS/Pinata, The
          Graph/Subgraphs, Docker, CI/CD, AWS, GCP, EC2
        </li>
      </ul>
    </section>
  );
}
