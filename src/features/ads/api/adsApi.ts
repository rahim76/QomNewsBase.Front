import axios from '@/app/axios'
import { AdResponseDto } from '../types/AdResponseDto'

export const getAds = async (): Promise<AdResponseDto> => {
  const { data } = await axios.get<AdResponseDto>('/Ad')
  return data
}
