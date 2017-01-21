import { RentalAgreementPage } from './app.po';

describe('rental-agreement App', function() {
  let page: RentalAgreementPage;

  beforeEach(() => {
    page = new RentalAgreementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
