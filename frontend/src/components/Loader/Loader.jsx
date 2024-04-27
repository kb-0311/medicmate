import React, { useEffect } from 'react'
import { ethers } from 'ethers';

export default function Loader() {

    useEffect(() => {
        const func = async() => {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.BrowserProvider(window.ethereum);
      
                // Request MetaMask account access
                await window.ethereum.request({ method: "eth_requestAccounts" });
      
                // Get the connected account
                const accounts = await provider.listAccounts();
      
                if (accounts.length > 0) {
                  // Use the Ethereum address as the user identifier
                //   setLoggedIn(true);
                //   // Store MetaMask profile (Ethereum address) in the state
                //   setUserProfile({ address: accounts[0] });
                //   setMetaMaskProvider(provider);
                //   // Redirect to your website's homepage
                //   navigate("/");
                }
              }
        }
        
    })

  return (
    <div>Loader</div>
  )
}
