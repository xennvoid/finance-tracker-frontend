export interface ITransaction {
  amount: number;
  createdAt: Date;
  date: string;
  description: string;
  text: string;
  type: 'income' | 'expense';
  updatedAt: Date;
  card: {
    number: string;
    currency: string;
  };
}
