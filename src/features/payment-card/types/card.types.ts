export interface ICard {
  _id: string;
  number: string;
  holderFirstName: string;
  holderLastName: string;
  availableUntil: Date;
  balance: number;
  currency: string;
  mainBackgroundColor?: string;
  secondaryBackgroundColor?: string;
  mainTextColor?: string;
  secondaryTextColor?: string;
}
