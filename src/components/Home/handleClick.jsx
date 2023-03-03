//meant to store the handleclick

class LoggingButton extends Hero.jsx {
     getCurrentWalletConnected = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
          try {
            const accounts = await window.ethereum.request({
              method: "eth_accounts",
            });
            if (accounts.length > 0) {
              setWalletAddress(accounts[0]);
              setUserAddress(accounts[0]);
              console.log(accounts[0]);
            } else {
              console.log("Connect to MetaMask using the Connect button");
            }
          } catch (err) {
            console.error(err.message);
          }
        } else {
          /* MetaMask is not installed */
          console.log("Please install MetaMask");
        }
      };
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.getCurrentWalletConnected()}>
        
        </button>
      );
    }
  }