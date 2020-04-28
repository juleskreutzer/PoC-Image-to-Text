export class CheckEnv {

  public static check() {
    const error: Error = new Error();

    if (process.env.GOOGLE_APPLICATION_CREDENTIALS === undefined || process.env.GOOGLE_APPLICATION_CREDENTIALS === undefined) {error.message = 'No path to Google credentials provided'; throw error;}
  }
}
