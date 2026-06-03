export interface News {
  id: string
  title: string
  description: string
  thumbnail?: string
  viewsCount: number
  newsGroupId: number
  createdAt: Date
  updatedAt: Date
}
