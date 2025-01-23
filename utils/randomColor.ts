//hexa number
//do it 6 times
//
function randomColorGenerator() {
  let color: string = "#";
  for (let i = 0; i < 6; ++i) {
    const letter = Math.floor(Math.random() * 16);
    const hex: string = letter.toString(16).toUpperCase();
    color = color + hex;
  }
  return color;
}
export default function generateColorArray(): string[] {
  const color: string[] = [];
  for (let i = 0; i < 3; ++i) {
    const hex = randomColorGenerator();
    color.push(hex);
  }
  return color;
}
