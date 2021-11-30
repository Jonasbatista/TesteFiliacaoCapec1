export interface RespostaGravacao {

  formulario: string;
  data: string;
  hora: string;
  protocolo: string;
  erro: string;
  erros: {
    id: string;
    mensagem: string;
  }[];

}
