import React from "react";


// When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. 
// Instead, just provide a listener when the element is initially rendered.

// When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. 
// For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:


class PanelControl extends React.Component{
    constructor(props) {
      super(props);
      this.state = { isToggleOn: true };
      // this binding is necessaru to make 'this' work in the callback
      this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render(){
      return (
        <section id="panel-control">
          <div class="container-fluid text-center">
            <button type="button" class="button play" onClick={this.handleClick}>{this.state.isToggleOn ? 'Play' : 'Stop'}</button>
            {/* <button type="button" id="btPlay" className="right" onClick={ props.onGameStarted }>
                        { (props.gameStarted == true) ? "Parar jogo" : "Iniciar Jogo" }
                      </button>  */}
          </div>
        </section>
      );
    
    }
   
}

export default PanelControl;
