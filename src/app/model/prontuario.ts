import { IConsulta } from "./consulta";

export interface IProntuario {
  id?: number;
  nome: string;
  cpf: string;
  telefone?: string;
  dataNascimento?: string;
  consultas?: IConsulta[];
}