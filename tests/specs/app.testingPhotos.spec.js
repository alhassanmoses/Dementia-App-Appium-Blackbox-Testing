describe("Sending photo from companion app to senior app : ", () => {
    //SubTest1
    it("should click family group name", () => {
      const familyGroupBtn = $(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View[1]"
      );
      familyGroupBtn.waitForDisplayed({
        timeout: 50000,
      });
      return familyGroupBtn.click();
    });
  
    //SubTest2
    it("should select the photo icon", () => {
      const photofield = $(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.widget.Button"
      );
      //photofield.waitForDisplayed(/*{ timeout: 50000 }*/);
      return photofield.click();
      //return photofield.setValue("Test sending message from companion application to senior member directly");
    });

     //SubTest3
    it("should select from photos", () => {
        const photosfield = $(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView[2]"
        );
       // photosfield.waitForDisplayed({ timeout: 50000 });
        return photosfield.click();
        //return photofield.setValue("Test sending message from companion application to senior member directly");
      });

       //SubTest4
      it("should select the folder of photos", () => {
        const photosFolderField = $(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.TextView[2]"
        );
        //photosFolderField.waitForDisplayed({ timeout: 50000 });
        return photosFolderField.click();
        //return photofield.setValue("Test sending message from companion application to senior member directly");
      });

       //SubTest5
      it("should select the photo", () => {
        const photo = $(
          "//android.view.ViewGroup[@content-desc='Photo taken on Oct 13, 2020 8:59:04 AM']"
        );
        photo.waitForDisplayed({ timeout: 50000 });
        return photo.click();
        //return photofield.setValue("Test sending message from companion application to senior member directly");
      });

       //SubTest6
      it("should select textfield and input caption", () => {
        const captionfield = $(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText"
        );
        captionfield.waitForDisplayed({ timeout: 50000 });
        captionfield.click();
        return captionfield.setValue("Test sending photo from companion application to family group");
      });
    
  
    // //SubTest7
    it("should click send button", () => {
      const sendBtn = $(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View/android.widget.Button"
      );
      return sendBtn.click();
      });
  
    // //SubTest8
  
    // it("should wait for internet to resend message",() => {
  
    //   const time = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[8]/android.view.View[12]/android.view.View[3]"
    //   );
  
    //   time.waitForDisplayed({
    //     timeout: 500000,
    //   });
      
    // });
  
    it("should take screenshot", () => {
      driver.saveScreenshot("./photos/screenshot.png")
    })
});