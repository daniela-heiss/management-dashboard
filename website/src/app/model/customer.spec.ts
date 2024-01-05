import { Customer } from './customer';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer(12345, "Terry Berry", "Mainzer Straße 50", 49, new Text('176223454'), 123412.09, new Text("whatIsThis?"), "hello")).toBeTruthy();
  });
});
