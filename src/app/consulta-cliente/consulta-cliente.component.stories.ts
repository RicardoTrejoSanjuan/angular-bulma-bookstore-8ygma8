import { ConsultaClienteComponent } from './consulta-cliente.component';
import { text, withKnobs } from '@storybook/addon-knobs';


export default {
    title: 'Localización del Cliente ',
    component: ConsultaClienteComponent,
    decorators: [withKnobs],
};

export const consultaClientePorId = () => ({
    component: ConsultaClienteComponent,
    props: {
        titulo: text('text', 'LOCALIZACIÓN DEL CLIENTE')
    },
});
