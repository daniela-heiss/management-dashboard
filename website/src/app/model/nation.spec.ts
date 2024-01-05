import { Nation } from './nation';

describe('Nation', () => {
  it('should create an instance', () => {
    expect(new Nation(49, new Text('Deutschland'), 123, "hello")).toBeTruthy();
  });
});
