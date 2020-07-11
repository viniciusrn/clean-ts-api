import { SurveyResultModel } from '@/domain/models/survey-result'

export type SaveSurveyResultModel = Omit<SurveyResultModel, 'id'>

export type SaveSurveyReult = {
  save (data: SaveSurveyResultModel): Promise<void>
}
