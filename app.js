const btcoin = document.getElementById("bitcoin");
const etm = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  btcoin.innerHTML = response.bitcoin.usd;
  etm.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});


