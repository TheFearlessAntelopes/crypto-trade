import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route) {
    return browser.get('/' + route);
  }

  getParagraphText(el) {
    return element(by.css(el)).getText();
  }

  click(el) {
    return element(by.css(el))
      .getWebElement()
      .then(function(elm) {
        return browser.executeScript('$(arguments[0]).click();', elm);
    });
  }
}
