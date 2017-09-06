import { CurrencyDataFormatterPipe } from './currency-data-formatter.pipe';

describe('CurrencyDataFormatterPipe', () => {
    it('create an instance', () => {
        const pipe = new CurrencyDataFormatterPipe();
        expect(pipe).toBeTruthy();
    });
});
