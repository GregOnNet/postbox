import { PostboxPage } from './app.po';

describe('postbox App', function() {
  let page: PostboxPage;

  beforeEach(() => {
    page = new PostboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
