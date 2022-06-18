var QRCode = require('qrcode')

module.exports = (text)=>{
    try {
        return await QRCode.toDataURL(text)
      } catch (err) {
        console.error(err)
      }
}