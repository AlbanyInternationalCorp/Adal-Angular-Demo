import { AdalDemoPage } from './app.po';

describe('adal-demo App', () => {
  let page: AdalDemoPage;

  beforeEach(() => {
    page = new AdalDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
