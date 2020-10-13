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
            vidButton.click();
            let value  = driver.getNetworkConnection(); 
            if(value === 0){ 
                console.log('******************** No connection: ' + value + "********************");
                driver.setNetworkConnection(2); // Turn the Wifi Connection back on
                driver.pause(10000);
                let value1 = driver.getNetworkConnection(); // Get new connection status.
                console.log('******************** Connection Restored: ' + value1 + "********************");
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

    //SubTest2
    it("should end the call", () => {
        const userIcon= $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[1]/android.widget.Image");
        userIcon.click();
        const endCallButton = $(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View/android.widget.Button"
            );
            endCallButton.waitForDisplayed({ timeout:5000 });
            endCallButton.click();
            driver.pause(2000);
        });
    
    it("should assert end call text", () => {
        const text = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[1]")
        expect(text).toHaveAttributeContaining("text","You aborted the call with");
    });
    
    it("should take a screenshot", () =>{
        driver.saveScreenshot('./Photos/call-to-senior.png');
    });
});

  


