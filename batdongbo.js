// let a = 5
// console.log(a)

// updateA(b => console.log(b))
// function updateA(callback){
//     setTimeout(()=>{
//         a = 10
//         callback(a)
//     }, 1000)
// }

//ES5
// const request = require('request')
// function getCityTemp(cityName, callback){
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`
//     //URL sử dụng ``, không dùng ''
//     request(URL,{json: true}, function (error, response, body) {
//         if(error) return callback(error)
//         if(body.message) return callback("CityNotFound")
//         if(body.main.temp) return callback(null, body.main.temp)
//     });
// }
// getCityTemp("Hanoi",(error, temp) => {
//     console.log(error || temp)
// })

//ES6
// const request = require('request')
// function getCityTemp(cityName){
//     return new Promise((resolve, reject) => {
//         const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`
//         //URL sử dụng ``, không dùng ''
//         request(URL,{json: true}, function (error, response, body) {
//             if(error) return reject(error)
//             if(body.message) return reject("CityNotFound")
//             if(body.main.temp) return reject(body.main.temp)
//         });
//     })
// }
// getCityTemp('Hanoi')
// .then(temp => console.log(temp)) // then: tượng trưng cho thành công
// .catch(error => console.log(error)) // catch: tượng trưng cho lỗi

const request = require('request')
function cong(a, b){
    return new Promise((resolve, reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(URL, {json: true}, function(error, response, body){
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        })
    })
}
cong(1,1)
.then(tong => console.log(tong))
.catch(error => console.log(error))
function tru(a, b){
    return new Promise((resolve, reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(URL, {json: true}, function(error, response, body){
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        })
    })
}
tru(1,1)
.then(tong => console.log(tong))
.catch(error => console.log(error))
function nhan(a, b){
    return new Promise((resolve, reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(URL, {json: true}, function(error, response, body){
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        })
    })
}
nhan(1,1)
.then(tong => console.log(tong))
.catch(error => console.log(error))
function chia(a, b){
    return new Promise((resolve, reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(URL, {json: true}, function(error, response, body){
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            if(body.success) return resolve(body.message)
        })
    })
}
chia(1,1)
.then(tong => console.log(tong))
.catch(error => console.log(error))

cong(5,5)
.then(tong => tru(tong, 1))
.then(hieu => console.log(hieu))
.catch(error => console.log(error))

// async await
async function tinhToan(){
    try{
        const tong = await cong(5,5)
        const hieu = await tru(tong, 1)
        console.log(hieu)
    }catch(error){
        console.log(error)
    }
}
tinhToan();

//Promise ---- nâng cao
Promise.all(
    [
    cong(5,5),
    tru(5, null)
]
)
.then(values => console.log(values))
.catch(error => console.log(error))
