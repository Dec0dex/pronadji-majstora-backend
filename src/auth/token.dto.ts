/**This class is a data transfer object (DTO) that represents the access and refresh tokens returned by
the server. */
export class TokenDto {
  /** A property that holds information about access token */
  access_token: string;
  /** A property that holds information about refresh token. */
  refresh_token: string;

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class
   * @param {string} access_token - The access token that you get from the Spotify API.
   * @param {string} refresh_token - The refresh token that was returned from the initial authorization
   * code exchange.
   */
  constructor(access_token: string, refresh_token: string) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
  }
}
