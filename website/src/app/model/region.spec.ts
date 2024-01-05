import { Region } from './region';

describe('Region', () => {
  it('should create an instance', () => {
    expect(new Region(123, new Text('text'), "hello")).toBeTruthy();
  });
});
