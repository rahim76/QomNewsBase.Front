import { AdPositionTypeEnum } from './AdPositionTypeEnum'

export interface AdDto {
  id: string
  title: string
  description: string
  priority: number
  thumbnail: string
  targetUrl: string
  startDate: Date
  startDateLocal: string
  endDate: Date
  endDateLocal: string
  isActive: boolean
  clickCount: number
  positionType: AdPositionTypeEnum
  positionTypeTitle: string
  createdAt: Date
  createdAtLocal: string
  updatedAt: Date
  updatedAtLocal: string
}
