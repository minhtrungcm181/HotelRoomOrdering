import * as CryptoJS from 'crypto-js'
import { Buffer } from 'buffer';
import * as https from 'https'




type amount = {
    amount: number
}

const MomoConfig = (amount : amount) => {
    window.Buffer = Buffer;
var partnerCode = "MOMO";
var accessKey = "F8BBA842ECF85";
var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
var requestId = partnerCode + new Date().getTime();
var orderId = requestId;
var orderInfo = "pay with MoMo";
var redirectUrl = "https://momo.vn/return";
var ipnUrl = "https://callback.url/notify";
// var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
var amount = amount;
var requestType = "captureWallet"
var extraData = "";
var rawSignature = "accessKey="+accessKey+"&amount=" + amount+"&extraData=" + extraData+"&ipnUrl=" + ipnUrl+"&orderId=" + orderId+"&orderInfo=" + orderInfo+"&partnerCode=" + partnerCode +"&redirectUrl=" + redirectUrl+"&requestId=" + requestId+"&requestType=" + requestType
console.log("--------------------RAW SIGNATURE----------------")
console.log(rawSignature)
console.log(amount)
// var signature = crypto.createHmac('sha256', secretkey)
//     .update(rawSignature)
//     .digest('hex');
const createHmacString = (privateKey, ts) => {
    const key = CryptoJS.enc.Utf8.parse(privateKey)
    const timestamp = CryptoJS.enc.Utf8.parse(ts)
    const hmac = CryptoJS.HmacSHA256(ts, privateKey).toString(CryptoJS.enc.Hex)
    return hmac;
}
var signature = createHmacString(secretkey, rawSignature)
console.log("--------------------SIGNATURE----------------")
console.log(signature)

const requestBody = JSON.stringify({
    partnerCode : partnerCode,
    accessKey : accessKey,
    requestId : requestId,
    amount : amount,
    orderId : orderId,
    orderInfo : orderInfo,
    redirectUrl : redirectUrl,
    ipnUrl : ipnUrl,
    extraData : extraData,
    requestType : requestType,
    signature : signature,
    lang: 'en'
});

const options: https.RequestOptions = {
    hostname: 'test-payment.momo.vn',
    port: 443,
    path: '/v2/gateway/api/create',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
    }
}
const req = https.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (body) => {
        console.log('Body: ');
        console.log(body);
        console.log('payUrl: ');
        console.log(JSON.parse(body).payUrl);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
})

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});
// write data to request body
console.log("Sending....")
req.write(requestBody);
req.end();


}
export default MomoConfig;