import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimestamp(timestamp: number = 0) {
  const now = Date.now() / 1000; // Current time in seconds
  const secondsAgo = now - timestamp;

  // Convert seconds to hours
  const hoursAgo = Math.floor(secondsAgo / 3600);

  // Format the timestamp based on the time difference
  if (hoursAgo < 24) {
      // Less than 24 hours ago
      return `${hoursAgo} hrs ago (${formatDate(timestamp)})`;
  } else {
      // More than 24 hours ago (or future date)
      return `${formatDate(timestamp)}`;
  }
}

export function formatDate(timestamp: number = 0) {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const month = months[date.getMonth()];
  const day = ('0' + date.getDate()).slice(-2);
  const year = date.getFullYear();
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const timezone = '+UTC';

  return `${month}-${day}-${year} ${time} ${timezone}`;
}