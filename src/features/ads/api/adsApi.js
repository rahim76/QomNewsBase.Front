import axios from '@/app/axios'

export const getAds = async () => {
  const data = await axios.get('/Ad')
  return data.data
}

// export const sendAd = async () => {
//   const model = {
//     PositionType: 20,
//     Priority: 5,
//     StartDate: '2026-06-02',
//     EndDate: '2026-06-07',
//     IsActive: true,
//     Title: 'جهت تست',
//     Description: 'تست',
//     TargetUrl: 'https://ra.ir',
//     Thumbnail: base64File,
//   }
//   const data = await axios.post('/Ad', model)
//   return data.data
// }
