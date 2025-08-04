import { Skill } from "./skills-data";

/**
 * Splits skills into balanced rows for better visual layout
 * @param skills Array of skills to split
 * @returns Array of skill rows
 */
export const splitSkillsIntoBalancedRows = (skills: Skill[]): Skill[][] => {
  const totalSkills = skills.length;

  if (totalSkills === 0) return [];
  if (totalSkills === 1) return [skills];
  if (totalSkills === 2) return [skills];

  // For 3 or more skills, create balanced rows
  const isEven = totalSkills % 2 === 0;

  if (isEven) {
    // Even number: split evenly
    const half = totalSkills / 2;
    return [skills.slice(0, half), skills.slice(half)];
  } else {
    // Odd number: top row has 1 more than bottom
    const topCount = Math.ceil(totalSkills / 2);
    return [skills.slice(0, topCount), skills.slice(topCount)];
  }
};
