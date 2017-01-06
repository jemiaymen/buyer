import { BuyerPage } from './app.po';

describe('buyer App', function() {
  let page: BuyerPage;

  beforeEach(() => {
    page = new BuyerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
