import { BaseDto } from '@/shared/types/BaseDto'
import { AdGroupDto } from './AdGroupDto'

export interface AdResponseDto {
  data: Array<AdGroupDto>
  baseDto: BaseDto
}
