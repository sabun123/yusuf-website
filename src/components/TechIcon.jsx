import { FaBrain } from "react-icons/fa";
import azureSvg from "devicon/icons/azure/azure-original.svg?raw";
import langchainSvg from "simple-icons/icons/langchain.svg?raw";
import mysqlSvg from "simple-icons/icons/mysql.svg?raw";
import postgresqlSvg from "simple-icons/icons/postgresql.svg?raw";
import reactSvg from "simple-icons/icons/react.svg?raw";

/**
 * Official brand marks for known tech labels (rendered in their original
 * colors). Returns null for labels without a matching icon.
 */
const byLabel = {
  azure: azureSvg,
  "azure foundry": azureSvg,
  "azure container apps": azureSvg,
  langchain: langchainSvg,
  mysql: mysqlSvg,
  postgresql: postgresqlSvg,
  "react native": reactSvg,
};

export default function TechIcon({ label, className = "h-3.5 w-3.5" }) {
  const key = label.toLowerCase();

  if (key === "llm") {
    return <FaBrain aria-hidden className={className} />;
  }

  const raw = byLabel[key];
  if (!raw) return null;

  // Inject sizing so the embedded svg fills its wrapper span
  const sized = raw.replace("<svg ", '<svg class="h-full w-full" ');

  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      dangerouslySetInnerHTML={{ __html: sized }}
    />
  );
}
