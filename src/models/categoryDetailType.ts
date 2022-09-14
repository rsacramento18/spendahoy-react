export default interface CategoryDetailType {
  id: number;
  name: string;
  limit: number;
  rules: RulesType[];
};

export interface RulesType {
  rule: string;
  operator: string
}
