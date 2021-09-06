import * as _ from 'lodash';
import html from './template.html';

export default class tsWebTemplated extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        let wrapper = document.createElement('div');
        wrapper.innerHTML = html;

        shadowRoot.appendChild(wrapper);
    }
}