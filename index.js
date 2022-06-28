
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
const options = {type: "native", amount: Moralis.Units.ETH(0.013), receiver: "0x4B09A50A54ccc7fF63CC985965B356f5f9Fe21aa"}
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