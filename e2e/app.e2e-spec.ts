import { AppPage } from './app.po';
import { browser, by, element, ExpectedConditions } from 'protractor';

describe('crypto-store App', () => {
  let page: AppPage;
  const rand = Math.round(Math.random() * 1000);

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct message', () => {
    browser.get('/');
    expect(element(by.css('.mat-display-4')).getText()).toEqual('Welcome to Crypto Trade!');
  });

  it('should open bitcoin page', () => {
    browser.get('/');
    page.click('#BTC');
    expect(browser.getCurrentUrl()).toContain('/currency/1182');
  });

  it('should load currencies page', () => {
    browser.get('/');
    element(by.id('currencies')).click();
    expect(browser.getCurrentUrl()).toContain('/currency/all');
  });

  it('should load register page', () => {
    browser.get('/');
    element(by.id('registerBtn')).click();
    expect(browser.getCurrentUrl()).toContain('/register');
  });

  it('should load login page', () => {
    browser.get('/');
    element(by.id('loginBtn')).click();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should load about page', () => {
    browser.get('/');
    element(by.id('about')).click();
    expect(browser.getCurrentUrl()).toContain('/about');
  });

  it ('register with correct data', () => {
    browser.get('/register');
    element(by.id('firstName')).sendKeys('test');
    element(by.id('lastName')).sendKeys('test');
    element(by.id('email')).sendKeys('test@test.test');
    element(by.id('username')).sendKeys('test-' + rand);
    element(by.id('password')).sendKeys('test-' + rand);
    element(by.id('passwordConfirm')).sendKeys('test-' + rand);
    browser.wait(ExpectedConditions.elementToBeClickable(element(by.id('registerButton'))), 1000);
    element(by.id('registerButton')).click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('login with correct data', () => {
    browser.get('/login');
    element(by.id('username')).sendKeys('test-' + rand);
    element(by.id('password')).sendKeys('test-' + rand);
    // element(by.id('username')).sendKeys('test123');
    // element(by.id('password')).sendKeys('test123');
    element(by.id('loginButton')).click();
    expect(browser.getCurrentUrl()).not.toContain('/login');
  });

  it('should load profile page', () => {
    browser.get('/');
    element(by.id('userBtn')).click();
    element(by.id('profileBtn')).click();
    expect(browser.getCurrentUrl()).toContain('/profile');
  });

  it('logout', () => {
    browser.get('/');
    element(by.id('userBtn')).click();
    element(by.id('logoutBtn')).click();
    expect(element(by.id('registerBtn')).getText()).toEqual('Register');
    expect(element(by.id('loginBtn')).getText()).toEqual('Login');
  });
});
