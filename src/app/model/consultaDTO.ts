export interface IConsultaDTO {
  prontuarioId?: number;
  sintomas?: string;
  classificacaoRisco?: string;
  pressaoArterial?: string;
  frequenciaCardiaca?: number;
  temperatura?: number;
  saturacao?: number;
  diagnosticoMedico?: string;
  prescricaoMedica?: string;
  status?: string;
}