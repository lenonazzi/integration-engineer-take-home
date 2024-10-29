import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple tailwind classes into a single string.
 * @param inputs - ClassValue[] - An array of class names or class objects.
 * @returns - A string of the merged class names.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
