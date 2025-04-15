export async function getAccount(walletClient: any, sender: string) {
  // Ethers-ext
  if(walletClient.provider) {
    walletClient = walletClient.provider;
  }
  
  // Viem
  if(walletClient.send) {
    return await walletClient.send("kaia_getAccount", [sender, "latest"]);
  } else if(walletClient.request) {
    return await walletClient.request({
      method: "kaia_getAccount",
      params: [sender, "latest"],
    });
  }
  
}