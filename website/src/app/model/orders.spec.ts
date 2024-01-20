import { OrdersDTO } from './ordersDTO';

describe('Orders', () => {
  it('should create an instance', () => {
    expect(new OrdersDTO(123, 213, new Text('Completed'), 123123, new Date('28.12.2023'), new Text('hello'), new Text('tello'), 1, "hello")).toBeTruthy();
  });
});
