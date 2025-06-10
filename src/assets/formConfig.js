import { messages } from './messageConfig';

export const formConfig = {
  pergunta1: {
    question: "Sobre a conclusão do Ensino Médio:",
    options: {
      "q1op1": {
        text: "Eu <span class='text-success'><strong>já concluí </strong></span> o Ensino Médio.",
        next: "pergunta2",
        visible: true
      },
      "q1op2": {
        text: "Sou concluinte. Estou no último ano/série/fase/período do Ensino Médio.",
        next: "pergunta4",
        visible: false
      },
      "q1op3": {
        text: "Não sou concluinte. Ainda falta mais de um ano/série/fase/período para eu concluir.",
        response: messages.naoTemDireito,
        visible: false,
      },
      "q1op4": {
        text: "Eu <span class='text-danger'><strong>não concluí </strong></span>o Ensino Médio.",
        response: messages.naoTemDireito,
        visible: true,
      },
    }
  },

  pergunta2: {
    question: "Sobre o Ensino Médio:",
    options: {
      "q2op1": {
        text: "Eu conclui o Ensino Médio em uma escola (escola regular, Instituto Federal, escola técnica, EJA, EJA EAD, Projeto Mundiar etc.).",
        next: "pergunta3",
        response: messages.concluiuEscolaRegular + messages.historicoConcluido,
        visible: true
      },
      "q2op2": {
        text: "Eu conclui o Ensino Médio prestando uma prova/exame de certificação (ENCEJJA/ENEM/Exames Supletivos).",
        response: messages.concluiuCertificacao + messages.final,
        visible: true
      }
    }
  },

  pergunta3: {
    question: "No seu histórico escolar existe alguma disciplina cujo desempenho obtido foi um conceito ao invés de uma nota? Por exemplo, A, B, C, Ótimo, Regular, etc.",
    options: {
      "q3op1": {
        text: "Não. Todos os desempenhos são notas (números).",
        response: messages.final,
        visible: true
      },
      "q3op2": {
        text: "Sim. Existem conceitos.",
        response: messages.conceito + messages.final,
        visible: true
      }
    }
  },

  pergunta4: {
    question: "Sobre o Ensino Médio:",
    options: {
      "q4op1": {
        text: "Eu irei concluir o Ensino Médio em uma escola (escola regular, Instituto Federal, escola técnica, EJA, EJA EAD, Projeto Mundiar etc.).",
        next: "pergunta3",
        response: messages.historicoConcluido,
        visible: true
      },
      "q4op2": {
        text: "Eu irei concluir o Ensino Médio prestando uma prova/exame de certificação (ENCEJJA/ENEM/Exames Supletivos).",
        next: "pergunta5",
        visible: true
      }
    }
  },

  pergunta5: {
    question: "Você já prestou a prova/exame de certificação do Ensino Médio (ENCEJJA/ENEM/Exames Supletivos)?",
    options: {
      "q5op1": {
        text: "Sim.",
        response: messages.concluiuCertificacao,
        visible: true
      },
      "q5op2": {
        text: "Não.",
        response: messages.naoTemDireito,
        visible: true
      }
    }
  }
};