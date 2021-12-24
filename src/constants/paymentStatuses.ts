import { Priority } from './enums/priorities';

export interface PaymentStatus {
  id: number;
  name: string;
  priority: Priority;
}

export const paymentStatuses: PaymentStatus[] = [
  {
    id: 1,
    name: 'profile.nav.payments.status.paid',
    priority: Priority.LOW,
  },
  {
    id: 2,
    name: 'profile.nav.payments.status.scheduled',
    priority: Priority.INFO,
  },
  {
    id: 3,
    name: 'profile.nav.payments.status.pending',
    priority: Priority.MEDIUM,
  },
  {
    id: 4,
    name: 'profile.nav.payments.status.failed',
    priority: Priority.HIGH,
  },
];
