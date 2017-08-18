import { CurrencyFormatterPipe } from './currency-formatter.pipe';

describe('CurrencyFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
