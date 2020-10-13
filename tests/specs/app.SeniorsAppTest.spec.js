//Test1
describe("Dementia App Video Call Test", () => {
  // //SubTest1
  // it("should click familyGroup button", () => {
  //   const familyGroupBtn = $(
  //     "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View"
  // );
  //   familyGroupBtn.waitForDisplayed({
  //     timeout: 20000,
  //   });
  //   return familyGroupBtn.click();
  // });
  // //SubTest2
  // it("should select textfield and input message", () => {
  //   const messageTextfield = $(
  //     "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText"
  //   );
  //   messageTextfield.waitForDisplayed({ timeout: 20000 });
  //   messageTextfield.click();
  //   return messageTextfield.setValue("this is a text");
  // });
  // //SubTest3
  // it("should click send button", () => {
  //   const sendBtn = $(
  //     "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.Button"
  //   );
  //   return sendBtn.click();
  // });
  // //SubTest4
  // it("should click back button", () => {
  //   const backBtn = $(
  //     "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button"
  //   );
  //   return backBtn.click();
  // });

  //SubTest1
  it("should click Video Call button", () => {
    const videoCallBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.widget.Image"
    );
    videoCallBtn.waitForDisplayed({
      timeout: 20000,
    });
    return videoCallBtn.click();
  });

  //SubTest2
  it('should get network connection of Android device', function () {

    let connectionStatus = driver.getNetworkConnection()

    //get network status
    switch (connectionStatus) {
      case 0:
        // no network connection
        console.log('******************** No connection: ' + value + "********************");
        driver.setNetworkConnection(2); // Turn the Wifi Connection back on
        let value1 = driver.getNetworkConnection(); // Get new connection status.
        console.log('******************** Connection Restored: ' + value1 + "********************");

        break;
      case 1:
        // airplane mode
        console.log('Airplane mode');
        break;
      case 2:
        // wifi
        console.log('WiFi enabled');
        break;
      case 4:
        // data
        console.log('Mobile Data Enabled');
        break;
      case 6:
        // wifi and data
        console.log('Mobile Data + WiFi');
        break;
    }
    ;
  });

  //subTest3
  it("should click Roberts tab to initiate a call", () => {
    const robertsBtn = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.Button");
    robertsBtn.waitForDisplayed({ timeout: 20000 });
    return robertsBtn.click();
  })

  //SubTest4
  it("should check whether call is being made", () => {
    driver.setImplicitTimeout(5000)

    const hangupButton = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View/android.widget.Button"
    );
    hangupButton.waitForDisplayed({ timeout: 20000 });

    return hangupButton.click();
  });

  //subTest5
  it("should click the back button after call is done", () => {
    const callEndText = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[1]");
    callEndText.waitForDisplayed({timeout:30000});
    
    expect(callEndText).toHaveAttributeContaining('text', 'You aborted the call with');
    const backbutton = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[2]/android.widget.Button");
    backbutton.click();
  });

  //subTest6
  it("Select the home button",()=>{
    const homeBtn = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[4]/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.widget.Button");
   return homeBtn.click();
  });
});

//Test2
describe("Dementia App Sending an image",()=>{
  //subTest1
  it("Go to chats screen",()=>{
    const chatsBtn = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[2]/android.view.View[3]/android.widget.Image");
  chatsBtn.waitForDisplayed({timeout:30000})
  return chatsBtn.click();
  
  });
    //subTest2
  it("Select familygroup tab",()=>{
    const familyGroupBtn = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]");
    familyGroupBtn.waitForDisplayed({timeout:30000})
  return familyGroupBtn.click();
  
  });

    //subTest3
  it("Select image picker button",()=>{
    const imageBtn = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View[2]/android.widget.Button");
    imageBtn.waitForDisplayed({timeout:30000})
  return imageBtn.click();
  
  });
    //subTest4
  it("Take Image",()=>{
    const shutterBtn = $("~Shutter");
    return shutterBtn.click();
  });

  //subTest5
  it("Accept image",()=>{
    const acceptBtn = $("/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout");
    acceptBtn.waitForDisplayed({timeout:20000});
    acceptBtn.click();    
    driver.pause(10000);
  });

  //subTest6
  it("Assert posted Image timestamp",()=>{
    var latestTimeStamp = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.view.View[last ()]/android.view.View[3]");
    var latestTimeStampText = latestTimeStamp.getText();
    
    expect(latestTimeStamp).toBePresent();
    console.log(`The sent time is ${latestTimeStampText}`);
  });

   //subTest7
   it("Take a screenshot then go out of chat screen", () => {
    driver.saveScreenshot('./screenshots/screenshot.png');
    const backbutton = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[4]/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.widget.Button");
    backbutton.click();
  });

  //subTest8
  it("Go to home screen",()=>{
    const homeBtn = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[4]/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.widget.Button");
    homeBtn.click();

    driver.pause(10000);
  });
    
})

//Moses Wuniche Alhassan
//TechnicalMisthios
