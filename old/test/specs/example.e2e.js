const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("test button clicked", () => {
  it("should login with valid credentials", async () => {
    // await LoginPage.open();

    // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!');

    this.timeout(15000);
    it("click familygroup button and send a message to family", function () {
      const selector =
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View";
      return client.init(caps).waitForExist(selector).element(selector).click();
    });
  });
});
