import { LightningElement, api} from 'lwc';//por padrão não é passado como paramentro a api tem que colocar manual
//se não colocar que a api vai ser importada não vai funcionar
export default class Oppsdaconta extends LightningElement {
    @api id;//repare que aqui ao inves de criar uma variavel qualquer na frente dele colocamos @api para que ele possa ser acessado fora do componente
    @api nome;
    @api valor;
    @api fase;
}