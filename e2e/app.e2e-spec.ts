import { ICTERGuruWebAppPage } from './app.po';

describe('icterguru-web-app App', function() {
  let page: ICTERGuruWebAppPage;

  beforeEach(() => {
    page = new ICTERGuruWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
