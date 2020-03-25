import AButton from './globalComponents/Button';
import AInput from './globalComponents/Input';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const components = [AButton, AInput, FontAwesomeIcon];

function installGlobalComponents() {
    for (const component of components) {
        this.component(component.name, component);
    }
}

export default installGlobalComponents;
