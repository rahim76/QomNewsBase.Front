import { AdPositionTypeEnum } from '../types/AdPositionTypeEnum'

export interface Ad {
  id: string
  title: string
  Description?: string
  Priority: number
  Thumbnail?: string
  TargetUrl: string
  StartDate: Date
  EndDate: Date
  IsActive: boolean
  ClickCount: bigint
  PositionType: AdPositionTypeEnum
}
