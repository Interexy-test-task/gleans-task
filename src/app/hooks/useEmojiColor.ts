const getAvgHex = (color: number, total: number) =>
  Math.round(color / total)
    .toString(16)
    .padStart(2, '0');

const useEmojiColor = (emoji: string) => {
  let totalPixels = 0;
  const colors = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0,
  };
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.font = '30px Arial';
  ctx.fillText(emoji, 0, 28);
  const { data: imageData } = ctx.getImageData(0, 0, 30, 30);
  for (let i = 0; i < imageData.length; i += 4) {
    const data = imageData.slice(i, i + 4);
    if (data[3] > 50) {
      totalPixels += 1;
      colors.red += data[0];
      colors.green += data[1];
      colors.blue += data[2];
      colors.alpha += data[3];
    }
  }
  const r = getAvgHex(colors.red, totalPixels);
  const g = getAvgHex(colors.green, totalPixels);
  const b = getAvgHex(colors.blue, totalPixels);

  return '#' + r + g + b;
};

export default useEmojiColor;
