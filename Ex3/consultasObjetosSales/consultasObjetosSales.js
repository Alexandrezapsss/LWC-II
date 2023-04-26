import { LightningElement, wire } from 'lwc'; // tem que chamar o wire
import getLeadLwc from '@salesforce/apex/leadConsultasLWC.getLeadLwc'//indicar o caminho da minha classe ao importar

export default class ConsultasObjetosSales extends LightningElement {
    @wire(getLeadLwc)//wire serve para chamar o metodo da minha classe e armazenar em um lugar qie aqui é o leads
    leads//minha lista do apex fica aqui e pode ser chamado no html
}