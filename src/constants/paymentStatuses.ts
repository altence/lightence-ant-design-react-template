interface PaymentStatus {
  id: number;
  name: string;
  color: string;
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
    color: 'additional3',
  },
  {
    id: 3,
    name: 'profile.nav.payments.status.pending',
    color: 'additional2',
  },
  {
    id: 4,
    name: 'profile.nav.payments.status.failed',
    color: 'additional',
  },
];
