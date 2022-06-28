export default interface TransactionType {
  id: number;
  date: string;
  description: string;
  value: number;
  type: string;
  organizationName: string;
  categoryId: number;
  categoryName: string;
  review: boolean;
  isDeleted: boolean;
}
