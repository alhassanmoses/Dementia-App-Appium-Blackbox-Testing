describe("Sending Image to Senior", () => {

    //SubTest 1
    it("should select senior member", () => {
        const seniorMember = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[7]/android.view.View[1]/android.view.View[2]/android.view.View[1]");            
        return seniorMember.click();
        });
    
    //SubTest 2
    it("should select image Icon", () => {
        const imageIcon = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.widget.Button");
        imageIcon.click();
    });

    //SubTest 3
    it("should select images", () => {
        const images = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView[2]");
        images.click();
    });

    //SubTest 4
    it("should select folder", () => {
        const folder = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.TextView[1]");
        folder.click();
    });

    //SubTest 5
    it("should select image", () => {
        const image = $("//android.view.ViewGroup[@content-desc='Photo taken on Oct 13, 2020 8:45:05 PM.']");
        image.click();
    });

    //SubTest 6
    it("should select caption field", () => {
        const field = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText");
        field.waitForDisplayed({timeout:3000});
        field.click();
        field.setValue("Photo of TV");
    });
    
    //SubTest 7
    it("should click send", () => {
        const send = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View/android.widget.Button");
        send.click();
        driver.pause(20000);

    });

    //SubTest 8
    it("should get the time stamp", () => {
        const time = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.view.View[last ()]/android.view.View[3]");
        expect(time).toExist();
        console.log("Time: " + time.getText());
    });
    
    //SubTest 9
    it("should take a screenshot", () => {
        driver.saveScreenshot('./Photos/image-to-senior.png');
    });
});

  


