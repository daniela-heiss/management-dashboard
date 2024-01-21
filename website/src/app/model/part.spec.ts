import { Part } from './part';

describe('Part', () => {
  it('should create an instance', () => {
    expect(new Part(123, "tree", new Text('what is this?'), new Text('text'), "tree", 123, new Text("tree"), 123, "comment")).toBeTruthy();
  });
});
