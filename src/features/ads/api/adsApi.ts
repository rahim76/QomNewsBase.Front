import axios from '@/app/axios'
import { AdDto } from '../types/AdDto'

export const getAds = async (): Promise<Array<AdDto>> => {
  const { data } = await axios.get<Array<AdDto>>('/Ad')
  return data
}
