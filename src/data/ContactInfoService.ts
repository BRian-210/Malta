import type { ContactInfoData } from './ContactInfoData'

export const contactInfoDataList: ContactInfoData[] = [
  {
    id: 'contact-phone-main',
    label: 'Phone',
    value: '+254 797102970',
    type: 'phone',
    iconName: 'Phone',
    primary: true,
    sortOrder: 1
  },
  {
    id: 'contact-email-main',
    label: 'Email',
    value: 'kinyanmuigai@gmail.com',
    type: 'email',
    iconName: 'Mail',
    primary: true,
    sortOrder: 2
  },
  {
    id: 'contact-office-address',
    label: 'Office',
    value: 'Kush Plaza 1st Floor-Ngurubani Town,Kirinyaga County',
    type: 'address',
    iconName: 'MapPin',
    primary: true,
    sortOrder: 3
  },
  {
    id: 'contact-hours',
    label: 'Opening Hours',
    value: 'Monday to Friday, 09:00 - 17:00',
    type: 'hours',
    iconName: 'Clock3',
    primary: false,
    sortOrder: 4
  }
]

export function getAll(): ContactInfoData[] {
  return contactInfoDataList
}

export function getById(id: string): ContactInfoData | undefined {
  return contactInfoDataList.find((item) => item.id === id)
}

export function loadPersisted(): ContactInfoData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('contactInfoDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as ContactInfoData[]
  } catch {
    return null
  }
}

export function savePersisted(items: ContactInfoData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('contactInfoDataList', JSON.stringify(items))
}