const { TiktokDL } = require("@tobyg74/tiktok-api-dl")

exports.TiktokVideo = async(query) => {

TiktokDL(query).then((result) => {
  console.log(result)
return result;
})
}