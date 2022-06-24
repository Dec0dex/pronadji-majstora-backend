import exp from 'constants';
import { comparePasswords, encodePassword } from './bcrypt';

describe('BCryptUtil', () => {
  it('should encode password', () => {
    const mockEncodePassword = jest.fn().mockImplementation(encodePassword);
    mockEncodePassword('myPassword');
    expect(mockEncodePassword).toHaveBeenCalledWith('myPassword');
    expect(mockEncodePassword).not.toEqual('myPassword');
  });
  it('should compare password', () => {
    const mockComparePassword = jest.fn().mockImplementation(comparePasswords);
    const mockEncodePassword = jest.fn().mockImplementation(encodePassword);
    expect(
      mockComparePassword('myPassword', mockEncodePassword('myPassword')),
    ).toEqual(true);
    expect(mockComparePassword).toHaveBeenCalled();
  });
});
