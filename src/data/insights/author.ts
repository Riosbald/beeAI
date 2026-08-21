/**
 * Author identity for the BeameAI by LOGON Insights Hub.
 *
 * IMPORTANT (ADR-010, ADR-043): import AUTHOR from this module, NOT from
 * "@/data/insights" — the barrel re-exports part1-3 and would pull all 42
 * articles into any bundle that only needs the byline.
 */
export const AUTHOR = {
  name: "Oluwamayowalogo",
  role: "Lead AI Strategist, BeameAI by LOGON",
  linkedin: "https://www.linkedin.com/pub/dir/Logo/Oluwamayowa",
  linkedinCanonical: "https://www.linkedin.com/in/oluwamayowa",
  bio: "Oluwamayowalogo (Oluwamayowa) is Lead AI Strategist at BeameAI by LOGON, the AI Insights & Consultancy anchored in Lagos, Nigeria. He leads AI search and LLMO research and implementation for B2B and commerce teams across Africa and global markets — entity architecture, structured data, crawler access and citation strategy across ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews.",
};
