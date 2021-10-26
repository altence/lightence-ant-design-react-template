export interface PaymentStatus {
  id: number;
  name: string;
  color: 'secondary' | 'success' | 'warning' | 'error';
}

export const paymentStatuses: PaymentStatus[] = [
  {
    id: 1,
    name: 'profile.nav.payments.status.paid',
    color: 'secondary',
  },
  {
    id: 2,
    name: 'profile.nav.payments.status.scheduled',
    color: 'success',
  },
  {
    id: 3,
    name: 'profile.nav.payments.status.pending',
    color: 'warning',
  },
  {
    id: 4,
    name: 'profile.nav.payments.status.failed',
    color: 'error',
  },
];
