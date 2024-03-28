import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDeltaDirection(delta: string) {
  if (delta?.includes("-")) {
    return "down"
  }
  return "up"
}


const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
export function formatDate(dateString: string): string {

  const [year, month, day] = dateString.split('-');
  const monthName = months[Number(month) - 1];

  return `${monthName} ${parseInt(day, 10)}`;


}