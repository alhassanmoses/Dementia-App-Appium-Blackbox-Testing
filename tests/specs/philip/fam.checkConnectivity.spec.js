describe("Network Connectivity Test", () => {
  //SubTest1
  it("should click familyGroup button", () => {
    const familyGroupBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View"
  );
    familyGroupBtn.waitForDisplayed({
      timeout: 20000,
    });
    return familyGroupBtn.click();
  });
  //SubTest2
  it("should select textfield and input message", () => {
    const messageTextfield = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText"
    );
    messageTextfield.waitForDisplayed({ timeout: 20000 });
    messageTextfield.click();
    return messageTextfield.setValue("Final Test!");
  });
  
  //SubTest3
  it("should click send button", () => {
    const sendBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.Button"
    );
    return sendBtn.click();
  });

  //SubTest4
  it('should get network connection of Android device', function () {
      let value  = driver.getNetworkConnection(); // Get connection status
      if(value === 0){ 
          console.log('******************** No connection: ' + value + "********************");
          driver.setNetworkConnection(2); // Turn the Wifi Connection back on
          driver.pause(20000);
      }
      if(value === 1){
          console.log('Airplane mode');
      }
      if(value === 2){
          console.log('WiFi enabled');
      }
      if(value === 4){
          console.log('Mobile Data Enabled');
      }
      if(value === 6){
          console.log('Mobile Data + WiFi');
      }
  });

  it("should confirm timestamp", () => {
    const timeIcon = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View[last ()]/android.view.View[2]");
          // code above: get id of time icon to be displayed after message is sent.
          expect(timeIcon).toExist();
          console.log(timeIcon.getText());
          let value1 = driver.getNetworkConnection(); // Get new connection status.
          console.log('******************** Connection Restored: ' + value1 + "********************");
  });

  //SubTest5
  it("should click back button", () => {
    const backBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button"
    );
    return backBtn.click();
  });
});

