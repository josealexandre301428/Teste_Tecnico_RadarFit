
export const validateFields = (produto, valor, descricao) => {
  const MIN_NAME = 5;
  const MIN_GERAL = 1;

  if (produto.length < MIN_NAME) return true;
  if (valor.length < MIN_GERAL) return true;
  if (descricao.length < MIN_GERAL) return true;
};
