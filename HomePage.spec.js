var Homepage = require('./Homepage.po.js');
//import Homepage from './Homepage.po.js'
describe('Suite: homepage', function() {
  it('should open Library Page', function() {
    Homepage.open();
    Homepage.waitForLibraryPageToLoad()
  })
  it('clicks on Tutorial Link and Validate Tutorial Page', function() {
    if (browser.config.isMobile == true) Homepage.clickMenuHamburger();
    Homepage.clickTutorialLink();
    Homepage.waitForTutorialPageToLoad();
  })
})