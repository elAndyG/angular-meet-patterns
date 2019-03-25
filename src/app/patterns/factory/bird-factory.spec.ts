import { BirdFactory } from './bird-factory';

describe('BirdFactory', () => {
  it('should create an instance', () => {
    expect(new BirdFactory()).toBeTruthy();
  });
});
