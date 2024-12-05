export const convertToCelsius = (fahrenheit: number): number =>
  Math.round(((fahrenheit - 32) * 5) / 9);

export const kelvinToFahrenheit = (kelvin: number): number =>
  Math.round((kelvin - 273.15) * (9 / 5) + 32);

export function formatUnixTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  };
  return date.toLocaleDateString('en-GB', options);
}
