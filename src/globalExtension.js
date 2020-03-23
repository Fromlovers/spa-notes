import AButton from './globalComponents/Button';
import AInput from './globalComponents/Input';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const components = {
    AButton,
    AInput,
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
