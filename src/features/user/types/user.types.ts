export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  country?: string;
  userName?: string;
}
