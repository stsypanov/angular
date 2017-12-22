import { AngTask2Page } from './app.po';

describe('ang-task2 App', () => {
  let page: AngTask2Page;

  beforeEach(() => {
    page = new AngTask2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
