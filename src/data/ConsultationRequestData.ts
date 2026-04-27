export interface ConsultationRequestData {
  id: string
  referenceId: string
  clientName: string
  email: string
  phone: string
  selectedServiceType: string
  propertyLocation: string
  propertyCategory: string
  budgetRange: string
  projectStage: string
  notes: string
  subject?: string
  source?: string
  preferredContactMethod: string
  createdAt: string
  status: string
}
