import AButton from './globalComponents/Button';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const components = {
    AButton,
    FontAwesomeIcon
};

function installGlobalComponents(Vue) {
    for (const component in components) {
        if (components[component].name) {
            Vue.component(components[component].name, components[component]);
        }
    }
}

export default installGlobalComponents;
