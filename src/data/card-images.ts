import pillarKnowledge from "@/assets/pillar-knowledge.jpg";
import pillarTrust from "@/assets/pillar-trust.jpg";
import pillarAgentic from "@/assets/pillar-agentic.jpg";
import pillarMeasurement from "@/assets/pillar-measurement.jpg";
import phaseAudit from "@/assets/phase-audit.jpg";
import phaseGraph from "@/assets/phase-graph.jpg";
import phaseEquip from "@/assets/phase-equip.jpg";
import phaseNetwork from "@/assets/phase-network.jpg";
import phaseTrack from "@/assets/phase-track.jpg";
import phaseInfluence from "@/assets/phase-influence.jpg";
import phaseConvert from "@/assets/phase-convert.jpg";

export const pillarImages = [
  {
    src: pillarKnowledge,
    alt: "Connected knowledge graph of entities linked into a structured lattice",
  },
  {
    src: pillarTrust,
    alt: "Layered verification discs representing an external trust layer",
  },
  {
    src: pillarAgentic,
    alt: "AI agents exchanging structured data across a machine-readable network",
  },
  {
    src: pillarMeasurement,
    alt: "Analytics chart tracking AI citations and share of voice",
  },
];

export const phaseImages: Record<string, { src: string; alt: string }> = {
  A: { src: phaseAudit, alt: "Magnifying lens auditing a grid of business data" },
  G: { src: phaseGraph, alt: "Entity nodes connected into a brand knowledge graph" },
  E: { src: phaseEquip, alt: "Content pages wrapped in structured data markup" },
  N: { src: phaseNetwork, alt: "Network hub wiring AI agents into inventory systems" },
  T: { src: phaseTrack, alt: "Rising chart tracking AI visibility over time" },
  I: { src: phaseInfluence, alt: "Ripples radiating outward as external trust signals" },
  C: { src: phaseConvert, alt: "Shopping cart merging into a completed conversion loop" },
};
