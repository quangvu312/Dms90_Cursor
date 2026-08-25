export interface TsMediaFile {
  name: string;
  type?: string;
  url?: string;
  size?: number;
  poster?: string;
  textContent?: string;
  objectUrl?: string;
}

export type TsStoryStatus = 'Khởi tạo' | 'Đã duyệt' | 'Từ chối' | 'Hết hạn' | string;

export interface TsCatalog {
  id: string;
  name: string;
  description?: string;
  status: string;
  createdAt?: string;
  createdBy?: string;
  icon?: string;
}

export interface TsStory {
  id: string;
  title: string;
  summary?: string;
  catalogId: string;
  cover?: TsMediaFile | null;
  bodyHtml?: string;
  channels?: string[];
  startDate?: string;
  endDate?: string;
  status: TsStoryStatus;
  promotionProgramIds?: string[];
  displayProgramIds?: string[];
  rejectionReason?: string;
  rejectedAt?: string;
  media?: TsMediaFile[];
  links?: { label?: string; url?: string }[];
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface TsOption {
  value: string;
  label: string;
}

export interface TsStore {
  catalogs: TsCatalog[];
  stories: TsStory[];
  channels?: TsOption[];
  storyStatuses?: TsOption[];
}
