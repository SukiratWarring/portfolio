/**
 * Calculate years of experience from the start date
 * @param startDate - The start date of experience (default: April 2022)
 * @returns Formatted string like "3.5+" representing years of experience
 */
export function calculateYearsOfExperience(startDate: Date = new Date(2022, 3, 1)): string {
  const now = new Date();
  const diffTime = now.getTime() - startDate.getTime();
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
  
  // Round to 1 decimal place
  const years = Math.round(diffYears * 10) / 10;
  
  // Format as "X.X+" to show it's approximate
  return `${years.toFixed(1)}+`;
}

/**
 * Hook to get years of experience (for React components)
 * Updates automatically as time passes
 */
export function useYearsOfExperience(): string {
  // This will be recalculated on each render, ensuring it's always up to date
  return calculateYearsOfExperience();
}
