import { IusPage } from './app.po';

describe('ius App', function() {
  let page: IusPage;

  beforeEach(() => {
    page = new IusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
