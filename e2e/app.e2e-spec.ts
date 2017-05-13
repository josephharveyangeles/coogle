import { LookcipePage } from './app.po';

describe('lookcipe App', () => {
  let page: LookcipePage;

  beforeEach(() => {
    page = new LookcipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
