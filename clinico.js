let clinica = []
const prompt = require("prompt-sync")({ sigint: true });

while(true){
console.log(`
             _____________________________________________
            |                                             |
            |          AGENDAMENTO DE CONSULTAS           |
            |                                             |
            |  Digite 1 - Agendar consultas               | 
            |  Digite 2 - Imprimir lista de Agendamento   |
            |  Digite 3 - Editar uma consulta             |
            |  Digite 4 - Excluir uma consulta            |
            |  Digite 0 - Finalizar agendamento           |
            |_____________________________________________|                                             `
);
console.log(`
             _____________________________________________
            |                                             |
            |    ESCOLHA UMA DAS OPCÇÕES LISTADA ACIMA    |
            |_____________________________________________|
`);
let opc = prompt('')
if(opc === '1'){
let paciente = prompt('Digite o nome do paciente: ')
let doutor = prompt('Qual o médico: ')
let data = prompt('Digite a data da consulta(dd/mm/aaaa): ')
let horario = prompt('Digite o horario desejado: ')
clinica.push({paciente, doutor, data, horario})
console.log('AGENDAMENTO CONCLUIDO COM SUCESSO');
} else if (opc === '2'){
    clinica.forEach((element, index) => {
       
        console.log(`
        _________________________________________________________________________________
          Consulta -${index + 1}-                                                  
          ${element.paciente} - DR.${element.doutor} - ${element.data} - ${element.horario}
        _________________________________________________________________________________
        `);
    })
} else if (opc === '3'){
    let validacao = true
    while(validacao){
    let listaDesejada = prompt('Qual lista você deseja: ')
    console.log(`
                        A lista desejada foi 
                        ${clinica[listaDesejada - 1].paciente}
                        ${clinica[listaDesejada - 1].doutor}
                        ${clinica[listaDesejada - 1].data}
    `);
    let mudar = prompt('O que você deseja mudar na consulta marcada? ')
    if(mudar == 'paciente'){
    let editar = prompt('Digite o nome do paciente atualizado: ')
    clinica[listaDesejada - 1].paciente = editar
    console.log(clinica[listaDesejada - 1]);
    validacao = false
    } else if (mudar == 'doutor' || mudar == 'dr'){
        let editar = prompt('Digite o nome do Doutor atualizado: ')
        clinica[listaDesejada - 1].doutor = editar
        console.log(clinica[listaDesejada - 1]);
        validacao = false
    } else if ( mudar == 'data'){
        let editar = prompt('Digite o nome atualizado: ')
        clinica[listaDesejada - 1].data = editar
        console.log(clinica[listaDesejada - 1]);
        validacao = false

    } else if(mudar == 'hora' || mudar == 'horario'){
        let editar = prompt('Digite a hora atualizado: ')
        clinica[listaDesejada - 1].horario = editar
        console.log(clinica[listaDesejada - 1]);
        validacao = false
    } else {console.log('Entrada invalida, tente novamente!');}
}
} else if(opc == '4'){
    clinica.forEach((element, index) => {
        console.log(`
        _________________________________________________________________________________
          Consulta -${index + 1}                                                 
          ${element.paciente} 
          DR.${element.doutor}
          ${element.data}
          ${element.horario}
        _________________________________________________________________________________
        `);
    });


    let indice = prompt('Qual lista você deseja deletar: ')
    clinica.splice(indice -1 , 1)
   
}else if (opc == '0'){
    console.log('Até logo!');
    break;
} else { console.log('Entrada incorreta, tente novamente');}
}
