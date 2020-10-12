describe("Video Calling Senior Test", () => {
    //SubTest1
    it("should select senior member", () => {
        const seniorMember = $(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[7]/android.view.View[1]/android.view.View[2]/android.view.View[1]"
            );
            return seniorMember.click();
        });
    
    //SubTest2
    it("should click video call button", () => {
        const vidButton = $(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[3]/android.widget.Button"
            );
            return vidButton.click();
        });

    //SubTest2
    it("should end the call", () => {
        const endCallButton = $(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View/android.widget.Button"
            );
            endCallButton.waitForDisplayed({ timeout:20000 });
            return endCallButton.click();
        });
    });

  

