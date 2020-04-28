import * as Vision from '@google-cloud/vision';
import {bind, /* inject, */ BindingScope} from '@loopback/core';

@bind({scope: BindingScope.TRANSIENT})
export class VisionService {
  constructor(/* Add @inject to inject parameters */) {}

  /**
   * Retrieve text from an image you provide in the path.
   *
   * The Google Vision API is a paid API.
   * You can find an example result from the Vision API in the `possible-result.json` file in the root dir.
   * The `test.png` file in the root dir is used in this example
   * @param imagePath path to image
   */
  async analyseImage(imagePath: string): Promise<Vision.protos.google.cloud.vision.v1.IAnnotateImageResponse[]> {
    const client = new Vision.ImageAnnotatorClient();

    const result: Vision.protos.google.cloud.vision.v1.IAnnotateImageResponse[] = await client.textDetection(imagePath)
    return result;
  }
}
