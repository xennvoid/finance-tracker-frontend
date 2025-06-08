export interface RechartsTickProps {
  x: number;
  y: number;
  payload: {
    value: string | number;
  };
  index?: number;
  textAnchor?: string;
}
