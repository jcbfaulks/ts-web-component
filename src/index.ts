import tsWebVanilla from './tsWebVanilla/tsWebVanilla';
import tsWebTemplate from './tsWebTemplated/tsWebTemplated';
import tsWebReact from './tsWebReact/tsWebReact';
import repeatList from './tsWebReactProp/tsWebReactProp';

customElements.define('ts-web-vanilla', tsWebVanilla);
customElements.define('ts-web-template', tsWebTemplate);
customElements.define('ts-web-react', tsWebReact);
customElements.define('repeat-list', repeatList);