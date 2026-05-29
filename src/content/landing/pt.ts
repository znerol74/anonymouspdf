import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. Carregue o seu PDF', body: 'Escolha um ficheiro ou arraste-o para a página. Abre localmente: nada é enviado para um servidor.' },
  { title: '2. Deteção automática', body: 'A correspondência de padrões e um modelo de IA no dispositivo localizam o texto sensível por si.' },
  { title: '3. Descarregar ou copiar', body: 'Obtenha um PDF com o texto realmente removido, ou copie o texto limpo.' },
];

export const pt: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'Ocultar PDF',
    seoTitle: 'Ocultar um PDF online — grátis, permanente e no navegador | AnonymousPDF',
    seoDescription:
      'Oculte um PDF grátis: esconda e remova permanentemente nomes, e-mails, números de conta e outros dados sensíveis, automaticamente e 100% no navegador. Sem carregamento, sem registo.',
    h1: 'Ocultar um PDF online — grátis e permanente',
    sub: 'Esconda informações sensíveis e remova-as definitivamente do ficheiro. O seu PDF é processado no navegador e nunca é carregado.',
    intro: [
      'Ocultar um PDF é mais do que desenhar um retângulo preto sobre um nome. Se o texto por baixo continuar lá, qualquer pessoa o pode copiar ou pesquisar. O AnonymousPDF remove por completo o conteúdo subjacente, pelo que as informações ocultadas não podem ser recuperadas.',
      'Carregue um documento e a ferramenta encontra automaticamente os dados sensíveis — endereços de e-mail, números de telefone, IBAN e números de cartão, números de identificação e de processo, além de nomes e organizações — e oculta-os. Tudo é executado localmente no seu dispositivo; nenhum ficheiro sai do navegador.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'A ocultação é permanente?', a: 'Sim. A página é reconstruída, pelo que o texto ocultado deixa de fazer parte do ficheiro: não pode ser copiado, pesquisado ou recuperado, ao contrário de uma caixa preta sobre texto ativo.' },
      { q: 'Os meus ficheiros são carregados para algum lado?', a: 'Não. Todo o processamento acontece no navegador, no seu dispositivo. O documento nunca é transmitido.' },
      { q: 'É mesmo grátis?', a: 'Sim — sem conta, sem e-mail, sem marca de água e sem limite de páginas.' },
      { q: 'O que deteta automaticamente?', a: 'E-mails, telefones, IBAN, cartões, endereços IP, URLs, números de identificação e de processo comuns e — através de um modelo de IA no dispositivo — nomes, organizações e locais.' },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'Anonimizar PDF',
    seoTitle: 'Anonimizar um PDF — remover nomes e dados pessoais grátis | AnonymousPDF',
    seoDescription:
      'Anonimize ficheiros PDF automaticamente. Detete e remova nomes, e-mails, telefones, IBAN e identificadores em segundos — grátis e 100% no navegador. Nada é carregado.',
    h1: 'Anonimizar documentos PDF automaticamente',
    sub: 'Detete e remova automaticamente os dados pessoais de um PDF — nomes, contactos, números de conta e identificação — sem carregar nada.',
    intro: [
      'Anonimizar um documento significa remover os dados que identificam pessoas: nomes, moradas, contactos e números de referência. O AnonymousPDF analisa o seu PDF e remove-os automaticamente, para que possa partilhar ou arquivar o ficheiro sem expor dados pessoais.',
      'A deteção combina padrões precisos para dados estruturados (e-mails, telefones, IBAN, cartões e identificadores) com um modelo de IA no dispositivo para nomes, organizações e locais. É um primeiro passo prático para a minimização de dados ao abrigo do RGPD — e como tudo corre no navegador, os dados pessoais nunca saem do seu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'Qual a diferença entre ocultar e anonimizar?', a: 'Ocultar esconde conteúdos específicos; anonimizar foca-se em remover os dados pessoais que identificam indivíduos. Esta ferramenta faz as duas coisas.' },
      { q: 'Remove nomes?', a: 'Sim. Um modelo de IA no navegador deteta nomes de pessoas e organizações, além de dados baseados em padrões como e-mails e IBAN.' },
      { q: 'Algo é carregado?', a: 'Não — o ficheiro é processado localmente e nunca é enviado para lado nenhum.' },
      { q: 'Deteta tudo?', a: 'A deteção automática é muito boa mas não perfeita. Verifique sempre o resultado antes de partilhar, sobretudo com nomes ou formatos invulgares.' },
    ],
  },

  'redaction-tool': {
    navLabel: 'Ferramenta de ocultação',
    seoTitle: 'Ferramenta de ocultação de PDF online e grátis — sem instalação | AnonymousPDF',
    seoDescription:
      'Uma ferramenta de ocultação de PDF online e grátis. Encontre e remova permanentemente dados sensíveis — nada para instalar, nada para carregar, sem registo.',
    h1: 'Uma ferramenta de ocultação de PDF grátis',
    sub: 'Software de ocultação sem instalação. Encontre e remova permanentemente dados sensíveis dos PDF, diretamente no navegador.',
    intro: [
      'O software de ocultação tradicional está preso ao computador, é caro e muitas vezes deixa texto recuperável. O AnonymousPDF é uma ferramenta de ocultação baseada no navegador: nada para instalar, nada para carregar, e o texto ocultado é realmente removido do ficheiro.',
      'Deteta automaticamente os dados sensíveis e oculta-os, depois permite descarregar um PDF limpo ou copiar o texto ocultado. Como corre inteiramente no seu dispositivo, é seguro mesmo com documentos confidenciais.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'Preciso de instalar alguma coisa?', a: 'Não. Funciona em qualquer navegador moderno, no computador ou no telemóvel.' },
      { q: 'Em que difere de desenhar caixas pretas?', a: 'As caixas desenhadas costumam deixar o texto por baixo intacto e recuperável. Esta ferramenta reconstrói a página, pelo que o conteúdo desaparece mesmo.' },
      { q: 'É seguro para ficheiros confidenciais?', a: 'Sim — os ficheiros são processados localmente e nunca são carregados.' },
      { q: 'Há algum custo ou limite?', a: 'É grátis, sem registo e sem limite de páginas.' },
    ],
  },

  'data-masking': {
    navLabel: 'Mascaramento de dados',
    seoTitle: 'Mascaramento de dados para PDF — mascarar PII online grátis | AnonymousPDF',
    seoDescription:
      'Mascare dados sensíveis em documentos PDF. Detete e remova automaticamente PII — e-mails, telefones, números de conta e identificação, nomes — grátis e inteiramente no navegador.',
    h1: 'Mascaramento de dados para documentos PDF',
    sub: 'Mascare automaticamente as informações pessoais identificáveis (PII) de um PDF — sem enviar os seus dados para um serviço na nuvem.',
    intro: [
      'O mascaramento de dados remove valores sensíveis para que um documento possa ser partilhado, revisto ou arquivado sem expor informações pessoais reais. O AnonymousPDF mascara PII nos PDF detetando-os e removendo-os do ficheiro.',
      'Reconhece identificadores estruturados — endereços de e-mail, telefones, IBAN, cartões, endereços IP e números de identificação ou referência — e usa um modelo de IA no dispositivo para nomes, organizações e locais. Todo o mascaramento acontece no navegador, pelo que os dados originais nunca são transmitidos.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'O que conta como PII aqui?', a: 'Contactos, identificadores financeiros (IBAN, cartões), identificadores de rede (IP), números de identificação e referência, e nomes, organizações e locais.' },
      { q: 'Os dados originais são enviados para um servidor?', a: 'Não. A deteção e o mascaramento correm localmente no navegador.' },
      { q: 'Posso obter o texto mascarado, não só um PDF?', a: 'Sim — use «Copiar texto» para obter o texto mascarado com etiquetas como [NAME] e [EMAIL].' },
      { q: 'É grátis para uso profissional?', a: 'Sim, a utilização é gratuita. Para fluxos sensíveis, verifique sempre o resultado antes de partilhar.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'Pseudonimizar PDF',
    seoTitle: 'Pseudonimizar um PDF — substituir nomes por Person_1, ORG_1 | AnonymousPDF',
    seoDescription:
      'Pseudonimize um PDF grátis: substitua automaticamente nomes, organizações e outros dados pessoais por marcadores consistentes como Person_1 e ORG_1 — 100% no navegador. Nada é carregado.',
    h1: 'Pseudonimizar documentos PDF automaticamente',
    sub: 'Substitua os dados pessoais por marcadores consistentes — o mesmo nome torna-se sempre o mesmo Person_1 — sem carregar o ficheiro.',
    intro: [
      'A pseudonimização mantém um documento legível ao mesmo tempo que quebra a ligação a pessoas reais: em vez de apagar um nome, substitui-o por uma etiqueta neutra e consistente como Person_1 ou ORG_1. O mesmo valor corresponde sempre ao mesmo marcador, pelo que o texto continua a fazer sentido — só já não se consegue saber a quem se refere.',
      'O AnonymousPDF deteta nomes, organizações, e-mails, telefones, IBAN, identificadores e datas, e depois reconstrói o PDF substituindo cada valor pelo seu marcador. Os originais são removidos do ficheiro, não escondidos, e tudo acontece no navegador — os dados de origem nunca saem do seu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'Em que difere a pseudonimização da ocultação?', a: 'A ocultação esconde a informação; a pseudonimização substitui-a por um marcador consistente (Person_1, ORG_1, Date_1) para que o documento continue legível enquanto as identidades reais desaparecem.' },
      { q: 'Os mesmos nomes são substituídos de forma consistente?', a: 'Sim. Cada ocorrência do mesmo valor recebe o mesmo número, pelo que as relações no texto são preservadas enquanto a identidade é removida.' },
      { q: 'Os valores originais podem ser recuperados?', a: 'Não. O PDF é reconstruído a partir do conteúdo substituído, pelo que os nomes e números originais já não estão no ficheiro.' },
      { q: 'É grátis e privado?', a: 'Sim — grátis, sem registo e 100% no navegador. Nada é carregado.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'PDF e RGPD',
    seoTitle: 'Anonimização de PDF para o RGPD — remover dados pessoais grátis | AnonymousPDF',
    seoDescription:
      'Anonimize PDF para o RGPD: detete e remova dados pessoais — nomes, contactos, IBAN, identificadores — automaticamente e 100% no navegador. Um passo prático de minimização. Sem carregamento.',
    h1: 'Anonimização de PDF compatível com o RGPD',
    sub: 'Remova dados pessoais dos PDF para apoiar a minimização de dados do RGPD — automaticamente e sem enviar nada para um servidor.',
    intro: [
      'O RGPD pede que trate apenas os dados pessoais de que realmente precisa e que os proteja. Antes de partilhar, arquivar ou publicar um PDF, remover nomes, contactos e identificadores é um passo de minimização simples e eficaz. O AnonymousPDF encontra esses dados automaticamente e remove-os do ficheiro.',
      'Como a deteção e a remoção correm inteiramente no navegador, os dados pessoais nunca são transmitidos a terceiros — fundamental quando é o próprio documento que pretende proteger. A deteção automática é uma boa primeira passagem, não aconselhamento jurídico; verifique sempre o resultado de acordo com as suas obrigações.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'Isto torna o meu documento conforme com o RGPD?', a: 'Ajuda na minimização de dados ao remover dados pessoais, mas a conformidade depende de todo o seu processo. Considere-a uma ferramenta prática, não aconselhamento jurídico, e verifique o resultado.' },
      { q: 'Algum dado é enviado para um servidor?', a: 'Não. Tudo corre localmente no navegador, pelo que os dados pessoais nunca saem do seu dispositivo.' },
      { q: 'Que dados pessoais deteta?', a: 'Nomes e organizações, e-mails, telefones, IBAN e números de cartão, endereços IP, números de identificação e de processo, e datas.' },
      { q: 'O documento pode continuar legível?', a: 'Sim — os valores são substituídos por marcadores neutros (p. ex. Person_1), pelo que o texto se lê com naturalidade sem identificar ninguém.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Remover nomes',
    seoTitle: 'Remover nomes de um PDF — grátis e automático | AnonymousPDF',
    seoDescription:
      'Remova nomes de um PDF automaticamente. Um modelo de IA no dispositivo deteta nomes de pessoas e organizações e remove-os — grátis, 100% no navegador, sem carregamento.',
    h1: 'Remover nomes de um PDF',
    sub: 'Detete e remova automaticamente nomes de pessoas e organizações de um PDF — sem carregar o ficheiro.',
    intro: [
      'Os nomes são muitas vezes a parte mais sensível de um documento e a mais difícil de apanhar com um simples localizar-e-substituir. O AnonymousPDF usa um modelo de IA no navegador para reconhecer nomes de pessoas e organizações — mesmo aqueles que não pensaria em procurar — e remove-os do ficheiro.',
      'Além dos nomes, também deteta e-mails, telefones, IBAN, identificadores e datas. Cada nome é substituído por um marcador neutro como Person_1, para que o documento continue legível sem identificar ninguém. Tudo corre no seu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'Como são detetados os nomes?', a: 'Um modelo de IA multilingue (NER) corre no navegador e assinala nomes de pessoas e organizações, além de dados baseados em padrões como e-mails e IBAN.' },
      { q: 'Funciona com nomes noutras línguas?', a: 'Sim — o modelo suporta várias línguas principais. A deteção é muito boa mas não perfeita, por isso verifique o resultado.' },
      { q: 'Os nomes desaparecem mesmo?', a: 'Sim. O PDF é reconstruído com cada nome substituído, pelo que o original já não está no ficheiro.' },
      { q: 'É grátis?', a: 'Sim, grátis e sem registo, processado inteiramente no navegador.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'Censurar PDF',
    seoTitle: 'Censurar um PDF online — esconder texto sensível grátis | AnonymousPDF',
    seoDescription:
      'Censure um PDF grátis: encontre e remova automaticamente o texto sensível — nomes, e-mails, números — e reconstrua o ficheiro para que não possa ser recuperado. 100% no navegador, sem carregamento.',
    h1: 'Censurar um PDF online',
    sub: 'Encontre e remova automaticamente as partes sensíveis de um PDF e descarregue um ficheiro onde o conteúdo censurado desapareceu mesmo.',
    intro: [
      'Censurar um PDF deve significar que o texto escondido fica realmente ilegível — não apenas coberto por uma caixa por baixo da qual se pode copiar. O AnonymousPDF remove por completo o conteúdo sensível do ficheiro e reconstrói a página, pelo que as informações censuradas não podem ser selecionadas, pesquisadas ou recuperadas.',
      'Deteta automaticamente o que censurar — nomes, organizações, e-mails, telefones, IBAN, identificadores e datas — e substitui cada elemento por um marcador neutro. Tudo acontece no navegador; o documento original nunca sai do seu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'O texto censurado é recuperável?', a: 'Não. A página é reconstruída, pelo que o texto original é removido do ficheiro em vez de escondido atrás de uma caixa.' },
      { q: 'O que é censurado automaticamente?', a: 'Nomes e organizações, e-mails, telefones, IBAN e cartões, endereços IP, números de identificação e de processo, e datas.' },
      { q: 'Tenho de carregar o meu ficheiro?', a: 'Não — tudo é processado localmente no navegador.' },
      { q: 'É grátis?', a: 'Sim, grátis, sem conta e sem limite de páginas.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Escurecer PDF',
    seoTitle: 'Escurecer texto num PDF — grátis e permanente | AnonymousPDF',
    seoDescription:
      'Escureça texto num PDF grátis. Detete automaticamente informações sensíveis e remova-as permanentemente do ficheiro — 100% no navegador, sem carregamento.',
    h1: 'Escurecer texto num PDF',
    sub: 'Remova permanentemente o texto sensível de um PDF — não apenas cobri-lo — automaticamente e no navegador.',
    intro: [
      'Desenhar um retângulo preto sobre o texto na maioria dos editores deixa as palavras intactas por baixo, onde ainda podem ser copiadas ou pesquisadas. O AnonymousPDF escurece a informação de forma segura: remove o texto subjacente do ficheiro e reconstrói a página, pelo que desaparece mesmo.',
      'Não precisa de marcar nada à mão — a ferramenta deteta os dados sensíveis automaticamente (nomes, e-mails, telefones, IBAN, identificadores, datas e mais) e remove-os. Corre inteiramente no seu dispositivo, pelo que os ficheiros confidenciais se mantêm privados.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'O texto fica por baixo da caixa preta?', a: 'Não. Ao contrário de um retângulo desenhado, isto remove o texto do ficheiro, pelo que nada pode ser copiado ou recuperado.' },
      { q: 'Posso escolher o que escurecer?', a: 'A ferramenta deteta os dados sensíveis automaticamente; verifique sempre o resultado antes de partilhar.' },
      { q: 'Algo é carregado?', a: 'Não, é processado localmente no navegador.' },
      { q: 'Quanto custa?', a: 'Nada — é grátis, sem registo.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Ocultar informações',
    seoTitle: 'Ocultar informações num PDF — grátis e automático | AnonymousPDF',
    seoDescription:
      'Oculte informações sensíveis num PDF automaticamente e grátis. Detete e remova nomes, contactos, números de conta e identificação — 100% no navegador, sem carregamento.',
    h1: 'Ocultar informações num PDF',
    sub: 'Encontre e remova automaticamente as informações que não quer partilhar de um PDF — sem carregar o ficheiro.',
    intro: [
      'Às vezes precisa de partilhar um documento mas manter partes privadas — um nome, uma morada, um número de conta. O AnonymousPDF encontra essas informações automaticamente e remove-as do ficheiro, para que o que resta seja seguro de enviar.',
      'Reconhece contactos, números financeiros e de identificação, endereços IP, datas e — através de um modelo de IA no dispositivo — nomes, organizações e locais. Os valores ocultados são substituídos por marcadores neutros e, como tudo corre no navegador, a informação original nunca é transmitida.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'A informação ocultada é removida ou apenas coberta?', a: 'Removida. O PDF é reconstruído sem o texto original, pelo que não pode ser recuperado.' },
      { q: 'O que pode ocultar?', a: 'Nomes, organizações, e-mails, telefones, IBAN e cartões, endereços IP, números de identificação e de processo, e datas.' },
      { q: 'O meu ficheiro é carregado?', a: 'Não — o processamento é inteiramente local no navegador.' },
      { q: 'É mesmo grátis?', a: 'Sim, grátis e sem registo.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Remover dados pessoais',
    seoTitle: 'Remover dados pessoais de um PDF — grátis | AnonymousPDF',
    seoDescription:
      'Remova dados pessoais de um PDF automaticamente: nomes, contactos, IBAN, identificadores e mais. Grátis, 100% no navegador, sem carregamento.',
    h1: 'Remover dados pessoais de um PDF',
    sub: 'Extraia os dados pessoais de um PDF automaticamente — nomes, contactos, números de conta e identificação — sem enviar nada para um servidor.',
    intro: [
      'Os dados pessoais escondem-se em mais sítios do que imagina: assinaturas, cabeçalhos, referências, blocos de contacto. O AnonymousPDF analisa todo o documento e remove os dados pessoais automaticamente, para que possa reutilizá-lo ou partilhá-lo em segurança.',
      'A deteção combina uma correspondência de padrões precisa (e-mails, telefones, IBAN, cartões e identificadores, endereços IP, datas) com um modelo de IA no dispositivo para nomes, organizações e locais. Cada valor é substituído por um marcador neutro e o ficheiro é processado inteiramente no seu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'O que conta como dados pessoais aqui?', a: 'Nomes e organizações, contactos, identificadores financeiros (IBAN, cartões), endereços IP, números de identificação e referência, e datas.' },
      { q: 'A informação original é enviada para algum lado?', a: 'Não. A deteção e a remoção correm localmente no navegador.' },
      { q: 'Posso obter também o texto limpo?', a: 'Sim — use «Copiar texto» ou «Descarregar texto» para obter o texto anonimizado com marcadores.' },
      { q: 'Deteta tudo?', a: 'É uma boa passagem automática mas não perfeita; verifique o resultado antes de partilhar, sobretudo com formatos invulgares.' },
    ],
  },

  'document-redact': {
    navLabel: 'Ocultar um documento',
    seoTitle: 'Ocultar um documento online — grátis e seguro | AnonymousPDF',
    seoDescription:
      'Oculte um documento online grátis. Detete e remova permanentemente dados sensíveis dos PDF — contratos, cartas, extratos — 100% no navegador, sem carregamento.',
    h1: 'Ocultar um documento — online e seguro',
    sub: 'Detete e remova permanentemente as partes sensíveis dos seus documentos PDF — sem carregar nada.',
    intro: [
      'Seja um contrato, uma carta, uma fatura ou uma notificação oficial, os detalhes sensíveis muitas vezes têm de ser removidos antes de o transmitir. O AnonymousPDF deteta esses dados automaticamente e remove-os do documento para sempre — não apenas visualmente com uma caixa, mas do próprio ficheiro.',
      'Reconhece e-mails, telefones, IBAN e números de cartão, endereços IP, números de identificação e de processo, e — através de um modelo de IA no dispositivo — nomes, organizações e locais. O processamento acontece inteiramente no seu dispositivo, pelo que os documentos confidenciais nunca saem do navegador.',
    ],
    steps: STEPS,
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'Que documentos posso ocultar?', a: 'Qualquer PDF. Se o seu documento for um ficheiro Word, guarde-o primeiro como PDF.' },
      { q: 'A ocultação é segura?', a: 'Sim. O conteúdo ocultado é removido do ficheiro e não pode ser recuperado.' },
      { q: 'Os documentos são carregados?', a: 'Não — o processamento acontece localmente no navegador.' },
      { q: 'Tem algum custo?', a: 'Não, a ferramenta é gratuita e não requer registo.' },
    ],
  },
};
