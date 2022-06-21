import * as bcrypt from 'bcrypt';

/**
 * Function that takes the value of the raw string and encodes it to the bcrypt hash with random salt
 * @param rawPassword text value that represents password that will be encoded
 * @returns hashed value with bcrypt algorithm
 */
export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, SALT);
}

/**
 * Function that takes the raw text and hash and compares them to see whether they are the same
 * @param rawPassword represents raw text to compare
 * @param hash value that represents the bcrypt hash to compare raw text with
 * @returns an boolean of the result of comparison
 */
export function comparePasswords(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}
