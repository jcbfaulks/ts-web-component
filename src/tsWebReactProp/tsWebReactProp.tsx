import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface RepeatListProps {
    count: number
}

class repeatList extends React.Component<RepeatListProps>{
    constructor(props: RepeatListProps) {
        super(props);
    }

    renderList() {
        let items = [];
        for (let index = 0; index < this.props.count; index++) {
            items.push((<li>Item: {index}</li>));
        }
        return items;
    }

    render() {
        return (
            <ol>
                {this.renderList()}
            </ol>
        )
    }
}

export default class repeatListWC extends HTMLElement {
    wrapper: HTMLElement;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Create (nested) span elements
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'wrapper');

        let count = this.getAttribute('count');
        let props: RepeatListProps = { count: parseInt(count) };

        ReactDOM.render(React.createElement(repeatList, props), this.wrapper);

        shadowRoot.appendChild(this.wrapper);
    }

    connectedCallback() {
        console.log('connected');
    }

    static get observedAttributes() { return ['count'] }

    attributeChangedCallback(name: any, oldValue: any, newValue: any) {
        console.log('Custom element attributes changed.');
        if (name === 'count') {
            let newProps: RepeatListProps = { count: parseInt(newValue) };
            ReactDOM.render(React.createElement(repeatList, newProps), this.wrapper);
        }
    }
}