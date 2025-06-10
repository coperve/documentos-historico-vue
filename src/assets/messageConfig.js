const basePath = process.env.NODE_ENV === 'production' ? '/documentos-historico-vue/' : '/';

export const messages = {
  concluiuEscolaRegular: "<p>1. Certificado de conclusão do Ensino Médio.</p>",

  concluiuCertificacao: `
    <p>1. Certificado de conclusão do Ensino Médio pelo ENCEJJA/ENEM/Exames Supletivos, no qual constem as disciplinas e o desempenho obtido.</p>
    <ul>
      <li>Se o certificado de conclusão ainda <span class='text-danger'><strong>não</strong></span> estiver pronto, enviar declaração da instituição certificadora na qual conste o seu nome, data de prestação do exame e o desempenho obtido em cada disciplina.</li>
    </ul>
  `,

  historicoConcluido: "<p>2. Histórico escolar contendo todas as notas/conceitos, disciplinas e nome das escolas nas quais cursou o Ensino Médio.</p>",

  historicoConcluinte: `
    <p>1. Histórico escolar contendo todas as notas/conceitos, disciplinas e nome das escolas nas quais cursou/está cursando o Ensino Médio.</p>
    <p>2. Declaração da escola confirmando que o(a) aluno(a) está no último ano/série/período/fase do Ensino Médio.</p>
    <ul>
      <li class="mb-3"><a href="${basePath}exemplo-concluinte.docx" target='_blank' rel='noopener noreferrer'>Exemplo de declaração (.docx)</a></li>
      <li class="mb-3"><a href="${basePath}exemplo-concluinte.pdf" target='_blank' rel='noopener noreferrer'>Exemplo de declaração (.pdf)</a></li>
    </ul>
  `,

  conceito: `
    <p>3. Declaração da escola atribuindo uma nota de zero a dez para cada um dos conceitos presentes no histórico.</p>
    <ul>
      <li class="mb-3"><a href="${basePath}exemplo-transformacao-conceito.docx" target='_blank' rel='noopener noreferrer'>Exemplo de declaração (.docx)</a></li>
      <li class="mb-3"><a href="${basePath}exemplo-transformacao-conceito.pdf" target='_blank' rel='noopener noreferrer'>Exemplo de declaração (.pdf)</a></li>
    </ul>
  `,

  final: `
    <h5 class="pb-2 border-bottom text-primary text-start">Antes de concluir a sua inscrição no sistema verifique se:</h5>
    <ul>
      <li class="mb-2">preencheu <span class='text-success'><strong>apenas as notas do último ano do Ensino Médio </strong></span>(última série ou duas últimas fases/períodos/semestres), na mesma ordem em que aparecem no histórico escolar.</li>
      <li class="mb-2">todos os documentos estão em página inteira. Quando digitalizar ou bater foto de documento em papel, certifique-se que cada página do arquivo digital contenha o conteúdo inteiro da mesma página do documento impresso.</li>
      <li class="mb-2">todos os documentos contêm carimbo e assinatura da escola ou protocolo para autenticação/verificação de autenticidade online ou carimbo e assinatura da instituição certificadora.</li>
      <li class="mb-2">todos os documentos estão legíveis e possibilitam fácil leitura dos seus dados.</li>
      <li class="mb-2">no histórico escolar é possível ler e identificar o nome da(s) escola(s) nas quais você cursou o Ensino Médio.</li>
    </ul>
  `,

  naoTemDireito: "<p>Você não tem direito a participar do processo seletivo, pois <span class='text-danger'><strong>não</strong></span> concluiu o Ensino Médio.</p>"
};