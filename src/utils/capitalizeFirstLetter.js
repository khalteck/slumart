export function capitalizeFirstLetter(str) {
  const firstLetter = str?.charAt(0)?.toUpperCase();
  const restOfString = str?.slice(1);

  return firstLetter + restOfString;
}
