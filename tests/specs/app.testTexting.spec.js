describe("Sending message from senior to family group", () => {
  //SubTest1
  it("should click message button", () => {
    const messageGroupBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View"
    );
    messageGroupBtn.waitForDisplayed({
      timeout: 20000,
    });
    return messageGroupBtn.click();
  });

//SubTest2
it("should click familygroup button", () => {
  const familyGroupBtn = $(
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]"
  );
  familyGroupBtn.waitForDisplayed({
    timeout: 20000,
  });
  return familyGroupBtn.click();
});

  //SubTest3
  it("should select textfield and input message", () => {
    const messageTextfield = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View[3]/android.widget.EditText"
    );
    messageTextfield.waitForDisplayed({ timeout: 20000 });
    messageTextfield.click();
    return messageTextfield.setValue("this is a new test message from the seniors app");
  });

  // //SubTest4
  it("should click send button", () => {
    const sendBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View[4]/android.widget.Button"
    );
    return sendBtn.click();
    });

  //SubTest5

  it("should wait for internet to resend message",() => {

    const time = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.view.View/android.view.View[2]"
    );

    time.waitForDisplayed({
      timeout: 400000,
    });
    
  });


  // //SubTest5
  // it("should click back button", () => {
  //   const backBtn = $(
  //     "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button"
  //   );
  //   return backBtn.click();
  // });

//   after(() => {
//     browser.pause(50000);
//   });
});

//TechnicalMisthios
//Elikem Bright Danku