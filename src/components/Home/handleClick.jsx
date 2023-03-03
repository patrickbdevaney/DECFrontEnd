

class LoggingButton extends Hero.jsx {
    handleClick() {
      
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()}>
        
        </button>
      );
    }
  }