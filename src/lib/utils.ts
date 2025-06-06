import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the date string in the format 'YYYY-MM-DD' for a given date.
 */
export const getDateString = (date: Date): string => {
  const adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000)
  return adjustedDate.toISOString().substring(0, 10)
}
