const axios = require('axios')
const { set } = require('mongoose')
const url = 'https://close.ap.ngrok.io'
const id = '630f1a0099989a26f01da0f2'

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
        console.log(error);
        });
    console.log(data)

    axios.put(`http://localhost:3002/kws/v4/closeprice/${id}`,{
        GCStoUSDT: data
    }).then((res)=>{
        console.log(res)
    }).catch(console.error)
}

setInterval(async()=>{
    await run()
},5000)

