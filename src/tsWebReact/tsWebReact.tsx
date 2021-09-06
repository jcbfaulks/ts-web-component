import * as React from "react";
import * as ReactDOM from "react-dom";

class rComp extends React.Component{
    render() {
        return (
          <div>React TS Web Component</div>
        );
      }
}

export default class rWebComp extends HTMLElement{
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Create (nested) span elements
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    ReactDOM.render(React.createElement(rComp), wrapper);

    shadowRoot.appendChild(wrapper);
  }
}