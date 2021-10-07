import React, { useContext, useMemo } from 'react';
import { Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { ColumnType } from 'antd/lib/table';
import { Dates } from 'constants/Dates';
import { Status } from '../Status/Status';
import { paymentStatuses, PaymentStatus } from 'constants/paymentStatuses';
import { getCurrencyPrice } from 'helpers/getCurrencyPrice';
import { Payment } from 'api/paymentHistory.api';
import * as S from './PaymentsTable.styles';

interface Recepient {
  name: string;
  img: string;
}

interface Status {
  key: number;
  recepient: Recepient;
  date: number;
  status: PaymentStatus | undefined;
  totalAmount: string;
}

interface PaymentsTableProps {
  payments: Payment[];
}

export const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments }) => {
  const { t } = useTranslation();

  const themeContext = useContext(ThemeContext);

  const columns: ColumnType<any>[] = useMemo(() => {
    return [
      {
        title: t('profile.nav.payments.recepient'),
        dataIndex: 'recepient',
        key: 'recepient',
        render: (recepient: Recepient) => (
          <S.RecepientWrapper>
            <Avatar src={recepient.img} alt={recepient.name} />
            {recepient.name}
          </S.RecepientWrapper>
        ),
        align: 'center',
      },
      {
        title: t('profile.nav.payments.date'),
        dataIndex: 'date',
        key: 'date',
        render: (text: string) => Dates.format(text, 'LL'),
        align: 'center',
        sorter: (a, b) => a.date - b.date,
      },
      {
        title: t('profile.nav.payments.status.title'),
        dataIndex: 'status',
        key: 'status',
        render: (status: PaymentStatus) => (
          <Status color={themeContext.colors.main[status.color]} text={t(status.name)} />
        ),
        align: 'center',
      },
      {
        title: t('profile.nav.payments.totalAmount'),
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        align: 'center',
      },
    ];
  }, []);

  const dataSource: Status[] = useMemo(
    () =>
      payments.map((payment, index) => {
        return {
          key: index,
          recepient: {
            name: payment.recepient,
            img: payment.imgUrl,
          },
          date: payment.date,
          status: paymentStatuses.find((status) => status.id === payment.status),
          totalAmount: getCurrencyPrice(payment.amount, payment.currency),
        };
      }),
    [payments],
  );

  return <S.PaymentHistoryTable size="middle" columns={columns} dataSource={dataSource} pagination={false} />;
};
