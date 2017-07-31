import { FelixNgPage } from './app.po';

describe('felix-ng App', () => {
  let page: FelixNgPage;

  beforeEach(() => {
    page = new FelixNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
