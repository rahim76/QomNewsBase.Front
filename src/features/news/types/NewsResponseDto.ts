import { BaseDto } from '../../../shared/types/BaseDto'
import { News } from '../entities/news'

export interface NewsResponseDto {
  data: News[]
  baseDto: BaseDto
}
