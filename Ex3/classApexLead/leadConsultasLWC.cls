public with sharing class leadConsultasLWC {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getLeadLwc(){//da para fazer uma lógica onde é acessado um parametro e definir uma pesquisa personalizada
        return [SELECT Id, Name, Phone, Email FROM Lead WHERE Phone != NULL LIMIT 10];//LEMBRETE pesquisar e tentar fazer isso como teste
    }
}