import { GenericIterator } from './iterator';

describe('iterator pattern', () => {
  it('should select the first item on first next', () => {
    const one = 1;
    const first = new GenericIterator([one]).next();
    expect(first).toBe(one);
  });

  it('should not have next', () => {
    const hasNext = new GenericIterator([]).hasNext();
    expect(hasNext).toEqual(false);
  });

  it('should start current as null', () => {
    const hasNext = new GenericIterator([]).current;
    expect(hasNext).toBeNull();
  });

  it('should set current to null if no records are left', () => {
    const iterator = new GenericIterator([1]);
    iterator.next();

    expect(iterator.next()).toBeNull();
  });

  it('should reset to first item on rewind', () => {
    const one = 1;
    const iterator = new GenericIterator([one, 2, 3]);
    iterator.next();
    iterator.next();
    iterator.next();
    iterator.rewind();
    const first = iterator.next();

    expect(first).toBe(one);
  });

  it('should throw error when there is no next()', () => {
    expect(new GenericIterator([]).next).toThrowError();
  });
});
