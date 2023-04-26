import { LightningElement, api } from 'lwc';//minha api está sendo exportada para aonde o filho for

export default class Ex1filho extends LightningElement {
    //criar os elementos da minha Api
    @api nome;
    @api sobre;
    @api idade;
    @api email;
    @api classifica;
    @api empresa;
    @api receitaanual;
}