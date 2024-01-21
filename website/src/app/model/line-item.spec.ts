import { LineItem } from './line-item';

describe('LineItem', () => {
  it('should create an instance', () => {
    expect(new LineItem(123, 123, 123, 123, 12, 12, 123, 123, new Text('tree'), new Text('tree'), new Date('12.07.98'), new Date('12.07.98'), new Date('12.08.1997'), new Text('tree'), new Text('tree'), "tree")).toBeTruthy();
  });
});
