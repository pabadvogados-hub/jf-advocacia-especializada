/* Configuracao do escritorio para a tela (carregada antes de tudo no index.html).
   Edite aqui quem e admin e quem e da equipe comercial; nada disso fica fixo no codigo.
   - admins: e-mails de login de quem ve tudo (CRM de todos, video gravado em teste etc.)
   - vendedores: equipe comercial. "nome" aparece nas metas e comissoes, "apelido" na saudacao,
     "email" e o login no sistema, "ramal" e o usuario do ramal na Telefonia (se houver). */
window.ESC_CONFIG = {
  escritorio: "JF Advocacia Especializada",
  cidade: "Brasilia/DF",
  admins: ["julianafreitas@jf-advocacia.com"],
  vendedores: [
    { nome: "Juliana Ramos de Freitas", apelido: "Dra. Juliana", email: "julianafreitas@jf-advocacia.com", ramal: "" }
    /* PEDIR_NO_KICKOFF (19/11): nomes e e-mails das associadas. Hoje a captacao passa
       toda pela Dra. Juliana - por isso ela e, por enquanto, a unica no comercial. */
  ],
  ramais_admin: ["titular"],
  video_gravado_teste: []   /* vazio = vale para os admins */
};
