const { I } = inject();

class pageObjectPage {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }
  wipe() {
    I.performSwipe({ x: 783, y: 2873 }, { x: 863, y: 418 });
    I.performSwipe({ x: 874, y: 2772 }, { x: 911, y: 1453 });
  }

  swipe(){
    let locator = "#io.appium.android.apis:id/drag_dot_1";
    I.swipe(locator, 800, 900, 1200);
  }
}


// For inheritance
module.exports = new pageObjectPage();

