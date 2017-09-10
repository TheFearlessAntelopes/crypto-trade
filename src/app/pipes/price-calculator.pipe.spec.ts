import { PriceCalculatorPipe } from './price-calculator.pipe';

describe('PriceCalculatorPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceCalculatorPipe();
    expect(pipe).toBeTruthy();
  });
});
