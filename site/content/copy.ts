/**
 * Copy da landing page (Prumo, versão 1.0 do documento de copy).
 *
 * Regra do documento: nenhum número, depoimento ou garantia é inventado.
 * Tudo que estava em [colchetes] na copy virou `null` ou lista vazia aqui,
 * e o bloco correspondente não aparece na página até ser preenchido.
 * Pendências: agendamentoUrl, preços da oferta, abatimento do diagnóstico,
 * prova social, garantia, limite de vagas, prazo de suporte, formas de
 * pagamento e contatos do rodapé.
 */

export const site = {
  nome: "Prumo",
  descricao: "Automação de processos com IA para empresas",
  // Link real de agendamento (Calendly, WhatsApp etc.). Enquanto for null,
  // os botões levam ao bloco final da página.
  agendamentoUrl: null as string | null,
};

export const ctaHref = site.agendamentoUrl ?? "#contato";

export const menu = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#automatizar", label: "O que automatizamos" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#oferta", label: "Oferta" },
  { href: "#faq", label: "FAQ" },
];

export const hero = {
  subtitle: "Automação de processos com IA para empresas",
  headline: "Sua equipe não foi contratada para copiar dados de uma planilha para outra.",
  subheadline:
    "A Prumo mapeia as tarefas repetitivas da sua empresa e automatiza uma por vez, até o trabalho chato rodar sozinho e sua equipe poder focar no que traz resultado.",
  cta: "Quero uma conversa de 30 minutos",
  microcopy: ["Sem custo", "Sem compromisso", "Você sai da conversa sabendo o que pode ser automatizado na sua empresa"],
};

export const proposta = {
  subtitle: "Proposta de valor",
  titulo: "Em quase toda empresa existe aquela planilha que só uma pessoa sabe preencher.",
  texto:
    "Aquele relatório que leva uma tarde inteira para ficar pronto. Aquela cobrança que depende de alguém lembrar.",
  destaque: "Não é falta de esforço da equipe. É trabalho manual que a tecnologia já sabe fazer sozinha.",
  solucao:
    "A Prumo entra na sua empresa, descobre onde o tempo está sendo desperdiçado e automatiza esses processos, um de cada vez, começando pelo que mais atrapalha.",
  semPrecisar: ["Você não precisa entender de IA", "Não precisa trocar seus sistemas", "Nem parar a operação"],
};

export const marquee = {
  linha1: ["Planilhas", "Propostas", "Contratos", "Cobranças", "Relatórios", "Notas fiscais", "WhatsApp", "E-mails"],
  linha2: ["Horas de volta", "Menos erro", "Informação na hora certa", "Clientes respondidos", "Equipe mais leve"],
};

export const dor = {
  subtitle: "Identificação da dor",
  titulo: "Trabalho que não deveria ser manual",
  intro:
    "Se você é dono ou gestor, provavelmente já sentiu que a empresa depende de trabalho que não deveria ser manual:",
  itens: [
    { texto: "Alguém da equipe passa horas por semana copiando dados de um lugar para outro.", img: "/images/misc/s3.webp" },
    { texto: "A planilha tem tantas abas e fórmulas que ninguém quer mexer, com medo de quebrar.", img: "/images/misc/s4.webp" },
    { texto: "Propostas, contratos e relatórios saem atrasados porque dependem de montagem manual.", img: "/images/misc/s5.webp" },
    { texto: "Clientes ficam sem resposta porque o WhatsApp acumula e ninguém dá conta.", img: "/images/misc/s6.webp" },
    { texto: "Cobranças e lembretes só saem quando alguém se lembra.", img: "/images/misc/s7.webp" },
    { texto: "Você já ouviu falar de IA, sabe que “deveria estar usando”, mas não sabe por onde começar.", img: "/images/misc/s8.webp" },
  ],
};

export const comoFunciona = {
  subtitle: "Como funciona",
  titulo: "Um processo de cada vez",
  intro:
    "A Prumo não vende “IA” no abstrato. Resolvemos um processo de cada vez, começando pelo que mais dói, e só avançamos quando o anterior estiver funcionando.",
  passos: [
    {
      titulo: "Mapear",
      texto:
        "Conversamos com você e com a equipe, desenhamos como o trabalho é feito hoje e calculamos quanto tempo e dinheiro cada tarefa consome.",
    },
    {
      titulo: "Automatizar",
      texto:
        "Construímos a automação do processo prioritário, usando as ferramentas que a empresa já tem (Google Sheets, Excel, e-mail, WhatsApp, seu sistema atual).",
    },
    {
      titulo: "Treinar",
      texto: "Ensinamos sua equipe a usar, com documentação simples. Você nunca fica refém de nós.",
    },
    {
      titulo: "Cuidar",
      texto: "Monitoramos, corrigimos o que quebrar e evoluímos a automação conforme a empresa muda.",
    },
  ],
};

export const automatizar = {
  subtitle: "O que podemos automatizar",
  titulo: "O trabalho chato que pode rodar sozinho",
  itens: [
    { icone: "fa-solid fa-table", texto: "Planilhas: consolidação, atualização, relatórios e alertas" },
    { icone: "fa-solid fa-file-signature", texto: "Propostas, contratos e documentos gerados automaticamente" },
    { icone: "fa-solid fa-bell", texto: "Cobranças, lembretes e confirmações" },
    { icone: "fa-solid fa-file-invoice", texto: "Leitura de notas fiscais, boletos e PDFs, com os dados já lançados onde precisam estar" },
    { icone: "fa-solid fa-envelope-open-text", texto: "Triagem de e-mails e mensagens, com resposta automática nas dúvidas simples" },
    { icone: "fa-brands fa-whatsapp", texto: "Atendimento no WhatsApp que qualifica, responde e passa para a pessoa certa" },
  ],
};

export const beneficios = {
  subtitle: "Benefícios",
  titulo: "O que muda na sua empresa",
  itens: [
    {
      titulo: "Horas de volta toda semana",
      texto: "O trabalho repetitivo deixa de existir e sua equipe passa o tempo em tarefas que exigem cabeça, não só mãos.",
    },
    {
      titulo: "Menos erro de digitação e de fórmula",
      texto: "A máquina não esquece, não troca coluna e não erra por cansaço.",
    },
    {
      titulo: "Informação na hora certa",
      texto: "Relatórios e números chegam prontos, sem você precisar pedir e esperar.",
    },
    {
      titulo: "Clientes respondidos mais rápido",
      texto: "Ninguém fica no vácuo e você para de perder venda por demora.",
    },
    {
      titulo: "Equipe mais leve",
      texto: "Menos tarefa chata significa menos desgaste e mais gente colaborando em vez de apagando incêndio.",
    },
    {
      titulo: "Empresa que não depende de uma pessoa só",
      texto: "O processo fica documentado e automatizado, e não na cabeça de quem sabe fazer.",
    },
    {
      titulo: "Tecnologia que você realmente usa",
      texto: "Começamos pequeno, entregamos algo que funciona e só depois expandimos.",
    },
  ],
};

// Só publicar com dados reais. Listas vazias escondem a seção inteira.
export const provaSocial = {
  subtitle: "Prova social",
  titulo: "Quem já automatizou com a Prumo",
  numeros: [] as { valor: string; legenda: string }[],
  depoimentos: [] as { texto: string; nome: string; empresa: string; foto: string }[],
  casos: [] as { problema: string; solucao: string; resultado: string }[],
  logos: [] as { src: string; alt: string }[],
};

export const oferta = {
  subtitle: "Oferta",
  titulo: "Como trabalhamos",
  intro: "Trabalhamos em três etapas, para você nunca pagar por algo antes de ver valor.",
  etapas: [
    { nome: "Conversa inicial", detalhe: "30 minutos", preco: "Sem custo" as string | null, estilo: "" },
    {
      nome: "Diagnóstico de processos",
      detalhe: "Mapa + plano priorizado + estimativa de horas e R$ economizados",
      preco: null as string | null, // [R$ XXX]
      estilo: "s2",
    },
    {
      nome: "Projeto piloto",
      detalhe: "1 processo automatizado, testado e treinado",
      preco: null as string | null, // [R$ X.XXX]
      estilo: "s2",
    },
    {
      nome: "Acompanhamento mensal",
      detalhe: "Monitoramento, ajustes e novas automações",
      preco: null as string | null, // [R$ XXX/mês]
      estilo: "s3",
    },
  ],
  // [CONFIRMAR] antes de ativar.
  abatimentoConfirmado: false,
  abatimento: "O valor do diagnóstico é abatido se você seguir para o projeto piloto.",
};

export const objecoes = {
  subtitle: "Quebra de objeções",
  titulo: "Talvez você esteja pensando",
  itens: [
    {
      pergunta: "Minha empresa é pequena demais para isso.",
      resposta:
        "Por isso mesmo funciona. Em empresa pequena, cada hora economizada pesa mais. Começamos com um processo só, no tamanho do seu bolso.",
    },
    {
      pergunta: "Não entendo nada de tecnologia.",
      resposta: "Você não precisa. Falamos a língua do seu negócio, e você só nos conta como o trabalho é feito hoje.",
    },
    {
      pergunta: "E se a equipe não aderir?",
      resposta:
        "Treinamos o time e deixamos tudo documentado. Automatizamos o que incomoda a equipe, então a adesão costuma ser natural.",
    },
    {
      pergunta: "Já tentei ferramentas e ninguém usou.",
      resposta:
        "Ferramenta solta realmente não resolve. Aqui o ponto de partida é o seu processo, e a tecnologia se encaixa nele.",
    },
    {
      pergunta: "E a segurança dos dados da minha empresa e dos meus clientes?",
      resposta:
        "Trabalhamos com contrato, acessos restritos e conformidade com a LGPD. Você sabe exatamente onde cada dado passa.",
    },
  ],
};

// [SUGESTÃO, CONFIRMAR ANTES DE PUBLICAR]. Com horasMinimas null a seção não aparece.
export const garantia = {
  subtitle: "Garantia",
  titulo: "Você não paga se não houver ganho",
  horasMinimas: null as number | null,
  texto: (horas: number) =>
    `Se, ao final do diagnóstico, não encontrarmos pelo menos ${horas} horas por semana que possam ser economizadas na sua empresa, você não paga. E se o projeto piloto não funcionar como combinado, nós corrigimos sem custo até funcionar.`,
};

// Se não houver limite real, deixe null. Escassez inventada derruba a confiança.
export const urgencia = {
  limiteMensal: null as number | null,
  texto:
    "Cada projeto é feito sob medida e acompanhado de perto, então limitamos as vagas para manter a qualidade. Quando as vagas do mês acabam, a próxima abertura é no mês seguinte.",
};

const garantiaAtiva = garantia.horasMinimas !== null;
const prazoSuporte: string | null = null; // [DEFINIR PRAZO DE RESPOSTA]
const formasPagamento: string | null = null; // [INSERIR: Pix, boleto, cartão, parcelamento]

export const faq = {
  subtitle: "FAQ",
  titulo: "Perguntas frequentes",
  itens: [
    {
      pergunta: "Quanto tempo preciso dedicar?",
      resposta:
        "Cerca de 30 minutos na conversa inicial e algumas horas ao longo do diagnóstico para entendermos o seu processo. Depois disso, a equipe só precisa validar e aprender a usar.",
    },
    {
      pergunta: "Funciona para empresa que nunca usou IA?",
      resposta:
        "Foi pensado para isso. Começamos pelo que você já usa (planilha, e-mail, WhatsApp) e a IA entra só onde faz diferença.",
    },
    {
      pergunta: "Preciso trocar os sistemas que já uso?",
      resposta: "Não. Integramos com o que a empresa já tem, como Google Workspace, Microsoft 365, ERPs e CRMs.",
    },
    {
      pergunta: "E se eu não gostar do resultado?",
      resposta: garantiaAtiva
        ? "Veja a garantia acima. Corrigimos até funcionar como combinado."
        : "Corrigimos até funcionar como combinado.",
    },
    {
      pergunta: "Como funciona o suporte depois da entrega?",
      resposta:
        "No acompanhamento mensal monitoramos as automações e corrigimos qualquer falha, geralmente antes de você perceber." +
        (prazoSuporte ? ` ${prazoSuporte}` : ""),
    },
    {
      pergunta: "Meus dados ficam seguros?",
      resposta: "Sim. Trabalhamos com contrato, acessos limitados ao necessário e cuidados de LGPD.",
    },
    ...(formasPagamento ? [{ pergunta: "Como posso pagar?", resposta: formasPagamento }] : []),
  ],
};

export const ctaFinal = {
  imagine:
    "Imagine a segunda-feira em que a planilha já está atualizada, o relatório já chegou e as propostas já saíram. Sua equipe começa a semana resolvendo problemas, e não cavando dados.",
  titulo: "Esse começo está a uma conversa de distância.",
  botao: "Quero conversar sobre a minha empresa",
  microcopy: ["30 minutos", "Sem custo", "Sem compromisso"],
  ps: "Você não precisa ter tudo definido para conversar. Basta me contar qual tarefa mais consome o tempo da sua equipe. Na conversa, já te mostro como ela pode ser automatizada, e se não fizer sentido para a sua empresa, eu mesmo vou te dizer.",
  psVagas: "As vagas do mês são limitadas, então quanto antes você falar com a gente, melhor.",
};

// Contatos do rodapé: preencher antes de publicar. null esconde o item.
export const rodape = {
  email: null as string | null,
  telefone: null as string | null,
  instagram: null as string | null,
  linkedin: null as string | null,
};
