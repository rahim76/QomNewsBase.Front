export interface BaseDto {
  pageNumber: number
  pageSize: number
  totalCount: number
  hasMore: boolean
  success: boolean
  message: string
}
