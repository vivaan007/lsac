var Homepage = function () {

  var libraryHeader = 'h1.libraryHeader';
  var tutorialHeader = 'h1.tutorialsHeader';
  var lnkTutorial = '#tutorialsLink';
  // var lnkLibrary = '#tutorialsLink';
  var menuHamburger = 'i.hamburger';

  this.open = async function () {
    console.log("isMobile == ", browser.config.isMobile)
    await browser.maximizeWindow()
    await browser.url('https://familiar.lsac.org');
    
  };

  this.waitForLibraryPageToLoad = function () {
    $(libraryHeader).waitForDisplayed(5000);
  };

  this.clickTutorialLink = function () {
    $(lnkTutorial).click()
  }

  this.waitForTutorialPageToLoad = function () {
    $(tutorialHeader).waitForDisplayed(5000);
  };

  this.clickMenuHamburger = function () {
    $(menuHamburger).click();
  }

};
module.exports = new Homepage();