import { MetHotelsPage } from './app.po';

describe('met-hotels App', () => {
  let page: MetHotelsPage;

  beforeEach(() => {
    page = new MetHotelsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
