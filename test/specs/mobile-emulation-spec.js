const assert = require('assert');

describe('mobile emulate', () => {
    it('should be true', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        assert.strictEqual(browser.capabilities.mobileEmulationEnabled, true);
    });
});

