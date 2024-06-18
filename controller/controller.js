const admin = require('firebase-admin');


// const serviceAccount = {
//   "type": "service_account",
//   "project_id": "my-test-project-156ed",
//   "private_key_id": "24e42edca77e041bcf0635e0e9058a83022b260a",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZ9TDNUGGVSm1s\nZBWCVcIdri5oXcZgOYsvnM9Z415KPt2VWi0L9yogEsfVG3Rqr235GNlm4wjIeH1x\n7soTyZJRABaMFCavdWwxqjIwRdtQQUlEPidjaB7bSCTMWcawJ0z5pLr004HwBcSo\nxbegNxSctx+B0mHFdBGFeBon/EzV6cLPOElTgsesC/7h3TNQAittyHBqp+37emg7\nEwCpSvUqq4xiGqwbwwjewB1oXIemQj19XMcQLAkkXyaTaJe4+QF6Iy53mCCqZmm5\nUPQMC3cET9wC6nHO2fYSU+UU4cJKfENF6U+X0CCm/jPm3fCL93I8LLH4eAWVo92k\nQWDD41QfAgMBAAECggEAAP6Yc/dghUcgjPzzehmVe5wmcjUYXo5nCBvFNiSaVoBj\nrF8CXz109ShcChq+7cK6kYKNqjYl9AmNcw46xDCk0u/eIP0N9SvjB0+UBBW0oHo7\nMQ5gI6Jsb0AB/Cl15FVbWh1MA0+/5sXhJm71Q3azZSeEmyNDR2O9TXfdHvxmxCqB\n7DzvPntgGYyKqXeK5FIS5tb+pKu5pajxM1yH/vjCCtHfLlb8KrVQaL5Q3/mfR/mD\nSyRSb19px6VKM//ACf5poPg+3vESDFEPH0IrdD4HOvmeknGkbNIbZoT4b67cMhiG\nSyi99G9m8nCPPc7oNaHJH+qHS7RDVFUSogKcwDfSAQKBgQDsomm5e2k0S75N1hav\nVIY/+4ckVhBc8OhHji/Yiv2uPzSi3rHXgZ8b2UiYWcTm029exNrI8TY4y4atRgEW\n+NVAXa3qwzkkJwHCQXfZMXET2OwrctX3+q8eMiGkPxhPFbD7u70LtsrpmwI2a2m0\n5RrNtvnL0QOukbk5glNnZwDwnwKBgQDry36Im3QjrLz95Ux0X3wUAnuCZSD3B3dk\nNFB1+L/ywEpEtf+CzsYhy6WxxJtvhBUAqDj8SiXYgjoBnamMES0Ey3W30BHKDbOD\nfpr731u+Ed4Fe4pxIA/EQIVUwhjSFCdW5yNig7gP/iOEHHXd2ITNK4MYHW6y9mHb\nQ0wP7LlsgQKBgFBUsl9tLcG7FNeHnhvXLdv6n14OeW+TuMbR1hxE0umcO1ovD2CB\neGoT0TknAFj73grl+P/OIwIU1Zts8GHEB2DabHgN3hAPzeEMKItq5WA/e60kRs7w\nIxK1IgaIBNCUJIjQqtSXMTssjAu9Wx01yWuceiBezEku3xpOy9GGfiMxAoGBAJJM\nIef0O6zewivtlvAlRkDMAYG36Sob8dG0O6/WdJHTCMF1AmFQldHmHpobWC1qj/Vm\namTuRGj+86qI/ecvyPTOn+06Ja9trNGLPfHEdZGKWGyiaBUkRWQIfDFIdEnzwyzC\nIExBWXRiw/p2BhNtAYii1KWjrUlQYQq/yHOg9rMBAoGBAONn4ty0PYu0FjfiHGal\nBFgns4rgKIpU9cmeuc6rUf	C2a2ECmgd7JmM5+qINOzRVA1d/+Jge0AEDY+WbtWlR\ncasra2xsz64LNKRWqQeMwBYIpuEjInc6rxAUfS9EYUQoNtJnE0X8SnX9HKW1KmeU\nTIym6M+CdzC5aPoAyzmewDzy\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-47ud7@my-test-project-156ed.iam.gserviceaccount.com",
//   "client_id": "114273443781604977053",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-47ud7%40my-test-project-156ed.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


const pushnotification = async(notificationData)=>{
    const { title, body } = notificationData;

    // let token = "dfs3324dfsdfasfghdghjgdhfg23123232dfdf";
    // const message = {
    //   notification: {
    //     title : "new message",
    //     body : JSON.stringify({ 
    //       Sender: "John Doe",
    //       Message: "Hey, how are you doing?"
    //   }),
    //     sendTime :`${new Date()} `
    //   },
    // };

  
    try {
      // const response =await admin.messaging().sendToDevice(token, message);
      // console.log('Successfully sent message:', response,response.successCount);
      // return {
      //   successCount: response.successCount,
      //   failureCount: response.failureCount,
      //   results: response.results,
      // };
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).send('Error sending notification');
    }
}

module.exports ={
    pushnotification
}