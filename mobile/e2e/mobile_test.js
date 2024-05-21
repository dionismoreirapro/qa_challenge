Feature('views');

Scenario('Drag and Drop',  ({ I, pageObjectPage }) => {
  
    I.click('~Views')
    I.click('~Drag and Drop')
    pageObjectPage.swipe()
    I.closeApp();
});

Scenario('Alert Dialogs',  ({ I }) => {

    I.click('~App')
    I.click('~Alert Dialogs')
    I.click('#io.appium.android.apis:id/two_buttons')
    I.waitForVisible('#android:id/title_template', 5);
    I.click('#android:id/button1')   
    I.closeApp();
});

Scenario('TextSwitcher',  ({ I, pageObjectPage }) => {

    I.click('~Views')
    pageObjectPage.wipe()
    I.waitForVisible('~TextSwitcher', 5);
    I.click('~TextSwitcher')
    I.click('~Next')
    I.see('1')
    I.closeApp();
});


