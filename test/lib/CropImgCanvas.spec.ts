import { describe, expect, test } from "@jest/globals";
import { CropImgCanvas } from "../../src/lib/CropImgCanvas";

// export {};
describe("CropImgCanvas", () => {
  test("simple test", () => {
    const cropImgCanvas = new CropImgCanvas(document.createElement("canvas"));
    expect(cropImgCanvas.showCropped).toEqual(true);
  });
});
