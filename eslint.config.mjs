export default [
  {
    rules: {
      /* "no-console": "error", */
      indent: ["error", 2], //2 de espaço para identação
      "keyword-spacing": "error", //para dar espaço depois do IF
      "no-multiple-empty-lines": "error", //não permitir múltiplas linhas vazias
      "eol-last": ["error", "always"], //sempre ter uma linha vazia no final
      semi: ["error", "always"], //sempre com ponto e virgula
      "no-trailing-spaces": "error", //tirar espaçamento extras
      "operator-assignment": "error", //verificar redundância no operador
      "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ], //evitar declrações dentro de IF
    },
  },
];
