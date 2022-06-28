
const serverUrl = "https://q8gtzny4dsga.usemoralis.com:2053/server";
const appId = "yGZbED1bb9hVWNA5yI2ojIUR4MLDYzs648Lyty8X";
Moralis.start({ serverUrl, appId });

async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "0x0000000000000000000000000000" })
      console.log(user);
   } catch(error) {
     console.log(error)
   }
  }
}


async function send(){
const options = {type: "native", amount: Moralis.Units.ETH(0.1), receiver: "0x9f745e8A3ed7dB41dc642d683cc81410F24D80Ca"}
let result = await Moralis.transfer(options)
console.log(result);
}



async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  
  

document.getElementById("btn-login").onclick = login;
document.getElementById('send').onclick = send;
document.getElementById("btn-logout").onclick = logOut
