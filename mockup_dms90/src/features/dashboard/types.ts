export interface KpiCardData {
  key: string;
  title: string;
  iconBg: string;
  iconColor: string;
  rows: { label?: string; value: string; highlight?: boolean }[];
}

export interface RankItem {
  rank: number;
  code: string;
  name: string;
  percent: number;
}

export interface TopRankSection {
  title: string;
  items: RankItem[];
}
