import { Supplier } from './supplier';

describe('Supplier', () => {
  it('should create an instance', () => {
    expect(new Supplier(123, new Text('name'), "Straße 4", 123, new Text('no calls please'), 123, "I'm a comment")).toBeTruthy();
  });
});
