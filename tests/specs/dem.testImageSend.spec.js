describe("Sending an Image to a private member", () => {
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
  it("should click family member button", () => {
    const privateBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[5]/android.view.View[1]/android.view.View[2]/android.view.View[1]"
    );
    privateBtn.waitForDisplayed({
      timeout: 20000,
    });
    return privateBtn.click();
  });




 //SubTest3
   it("should click send image button",()=>{

    const cameraBtn = $(
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View[2]/android.widget.Button"
 );
    cameraBtn.waitForDisplayed({
    timeout: 20000,
  });
      return cameraBtn.click();
   });




  //SubTest4
   it("should select camera icon",()=>{
     const ImageBtn = $(
    "//android.widget.ImageView[@content-desc='Shutter']")
    return ImageBtn.click(); 
     
    });




       //SubTest5
       it("should confirm image send",()=>{
        const confirmBtn = $(
       "//android.widget.ImageButton[@content-desc='Done']"
        );
       
        confirmBtn.waitForDisplayed({
           timeout: 200000,
         });
         confirmBtn.click();
        driver.pause(30000);
   
          });




//SubTest6
it("turn on internet if off",function (){

    let value = driver.getNetworkConnection(); // Get connection status
     if(value === 0){ 
     console.log('******************** No connection: ' + value + "********************");
     driver.setNetworkConnection(6); // Turn the Wifi and data Connection back on
     }

     let value1 = driver.getNetworkConnection()
     console.log("connection status" +" "+value1);

});


 //SubTest7
 it ("should assert timestamp for image",() =>
 {
const xpath = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[12]/android.view.View[last()]/android.view.View[3]")
     expect(xpath).toExist()
     return expect;


//  const time = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.view.View[last ()]/android.view.View[3]"
//  );
//  let timing = time.getValue();
//  console.log (timing)
 
// let time = driver.getDeviceTime();
// console.log(time)

// // let logs = driver.getLogs('logcat')
// // console.log(logs)

});

it("should save a screenshot of the browser view", function () {

  driver.saveScreenshot('./photos/screenshotImage.png');
   });

});