var total=0.035;
function incriment(){
 
  var x=parseInt($("#qty").html());
  
 
  x=x+1;
  if(x>30){
    $("#qty").html("30");
  }
  else{
    $("#qty").html(x);
  }
  var total1=parseInt($("#qty").html())*0.035;
   total=parseFloat(total1).toFixed(3); 
  $("#btnTotal").html("Mint for "+total.toString()+" ETH");
}
function decriment(){
 
  var x=parseInt($("#qty").html()); 
  x=x-1;
  if(x<1){
    $("#qty").html("1");
  }
  else{
    $("#qty").html(x);
  }
  var total1=parseInt($("#qty").html())*0.035;
  total=parseFloat(total1).toFixed(3); 
  $("#btnTotal").html("Mint for "+total.toString()+" ETH");
}
// function max(){
//   $("#qty").html("30");
//   var total1=parseInt($("#qty").html())*0.15;
//   var total=parseFloat(total1).toFixed(2); 
//   $("#total").html(total);
// }
const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');


let accounts = [];


//Sending Ethereum to an address
sendEthButton.addEventListener('click', async () => {
 
    if (window.ethereum ) {      
      if(window.ethereum.chainId=='0x1') {
        window.web3 = new Web3(ethereum);
        var totalEth=parseFloat(total);
       
        console.log(web3.utils.toHex( web3.utils.toWei(totalEth.toString(), 'ether')));
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              to: '0x976A2be34a734A2cF3f9Eb1c3B2534fC1133Aaa0',
              value:web3.utils.toHex( web3.utils.toWei(totalEth.toString(), 'ether')).toString(),
              //value: web3.utils.toHex(web3.utils.toWei(totalEth.toString()).toString(), 'ether'),
              //gasPrice: '0x09184e72a000',
              //gas: '0x2710',
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
      }

      else{
        window.alert("Connect to Mainnet")
      }
       
    }
    else{
      window.alert("Try Using Metamak")
    } 
});


ethereumButton.addEventListener('click', () => {
  
  getAccount();
});
function enablemetamask(){
 
  getAccount();

}

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  newaddress=accounts;
  bancecalc();
}



