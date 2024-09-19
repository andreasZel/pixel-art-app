/**Converts imageData to array of rgb(r, g, b) strings
 * @param imageData the image data to convert
 * @returns rgb(r, g, b)[]
 */
export function getPixelColors(imageData: ImageData) {
    const pixels = imageData.data;
    const pixelColors = [];

    for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        pixelColors.push(`rgb(${r}, ${g}, ${b})`);
    }

    return pixelColors;
}