import { ImageUrlFormatterPipe } from './image-url-formatter.pipe';

describe('ImageUrlFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new ImageUrlFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
