import * as _ from 'lodash';

export default class tsWeb extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Create (nested) span elements
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        wrapper.innerText = 'Ts Web Component';

        // Create some CSS to apply to the shadow dom
        
        shadowRoot.append(wrapper);
    }
}