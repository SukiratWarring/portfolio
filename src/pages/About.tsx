export default function About() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I’m a <strong>Blockchain & Backend Engineer</strong> with 3.5+ years of
        experience designing and building decentralized systems and scalable
        backend services. My work spans multiple ecosystems including{" "}
        <strong>EVM (Ethereum, BSC)</strong>, <strong>TVM (Tron)</strong>,{" "}
        <strong>SVM (Solana)</strong>, and <strong>MoveVM (Aptos, Sui)</strong>.
        I specialize in smart contract development, protocol integrations,
        microservices architecture, and full-stack dApp design — always with a
        strong focus on security, scalability, and performance.
      </p>
      <ul className="list-disc pl-6 space-y-2">
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
