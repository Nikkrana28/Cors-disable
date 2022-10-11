const axios = require('axios')
const { set } = require('mongoose')
const url = 'https://close.ap.ngrok.io'
const id = '63450e2d1be26e46cfe0d02d'

// function run() {
//     setInterval(async()=>{
//     const data = await axios
//         .get("https://sapi.gcex.lt/v1/market/tickers", {})
//         .then(function (response) {
//         const price = Number(response.data.data["GCS/USDT"].close)
//         return price
//         })
//         .catch(function (error) {
//         console.log(error);
//         });
             
//     console.log(data)
//     },5000)
// }
// run();

async function run() {
    const data = await axios
        .get("https://sapi.gcex.lt/v1/market/tickers", {})
        .then(function (response) {
        const price = Number(response.data.data["GCS/USDT"].close)
        return price
        })
        .catch(function (error) {
        console.log("Got the error ");
        return 11.755
        });
    console.log(data)

    axios.put(`http://localhost:3003/kws/v4/closeprice/${id}`,{
        GCStoUSDT: data
    }).then((res)=>{
        console.log(res)
    }).catch(console.error)
}

setInterval(async()=>{
    await run()
},10000)

