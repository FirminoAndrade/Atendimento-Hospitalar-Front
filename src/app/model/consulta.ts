import { IProntuario } from "./prontuario";
import { StatusConsulta } from "./status_consulta";


export interface IConsulta {
  id?: number;
  prontuario?: IProntuario | null;
  nomePaciente: string;
  status: StatusConsulta;
  sintomas?: string;
  classificacaoRisco?: string;
  pressaoArterial?: string;
  frequenciaCardiaca?: number;
  temperatura?: number;
  saturacao?: number;
  diagnosticoMedico?: string;
  prescricaoMedica?: string;
  dataHoraConsulta?: string; 
}