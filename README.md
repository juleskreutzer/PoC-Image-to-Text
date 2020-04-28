# POC: Image to Text using LoopBack 4 and Google Vision API

This is a bare minimum POC using the Google Vision API to extract text from an image. The POC is build using [LoopBack 4](https://loopback.io).



### Running this POC

To run this example, you will need a Google Cloud Platfrom account and service account credentials (save the json as `google-credentials.json`). Because this project uses the Vision API, you will need to set up a billing account or check out the `possible-result.json` and `test.png` files to see what file is used in this POC.

After setting up you GCP account, run the following:

```bash
git clone https://github.com/juleskreutzer/PoC-Image-to-Text.git
cd PoC-Image-to-Text
npm install
GOOGLE_APPLICATION_CREDENTIALS=google-credentials.json npm run start
```





[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
