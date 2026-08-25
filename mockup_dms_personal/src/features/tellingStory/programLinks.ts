import promoRaw from '../../../data/promotion.json';
import displayRaw from '../../../data/display.json';
import { getStories } from './storyData';
import type { TsStory } from './types';

interface PromoItem {
  id: string;
  code?: string;
  name: string;
  status: string;
  startAt?: string;
  endAt?: string;
  terms?: string;
}

interface DisplayProgram {
  id: string;
  code?: string;
  name: string;
  status: string;
  startDate?: string;
  endDate?: string;
  content?: string;
}

const promoDoc = promoRaw as { items?: PromoItem[] };
const displayDoc = displayRaw as { programs?: DisplayProgram[] };

export const ACTIVE_PROGRAM_STATUS = 'RUNNING';

export function getPromotionPrograms(): PromoItem[] {
  return promoDoc.items || [];
}

export function getDisplayPrograms(): DisplayProgram[] {
  return displayDoc.programs || [];
}

export function isActiveProgram(item?: { status?: string }) {
  return String(item?.status || '') === ACTIVE_PROGRAM_STATUS;
}

export function activePromotionOptions(selectedIds: string[] = []) {
  const selected = new Set((selectedIds || []).map(String));
  return getPromotionPrograms()
    .filter((p) => isActiveProgram(p) || selected.has(String(p.id)))
    .map((p) => ({ value: p.id, label: p.name }));
}

export function activeDisplayOptions(selectedIds: string[] = []) {
  const selected = new Set((selectedIds || []).map(String));
  return getDisplayPrograms()
    .filter((p) => isActiveProgram(p) || selected.has(String(p.id)))
    .map((p) => ({ value: p.id, label: p.name }));
}

export function findPromotion(id: string) {
  return getPromotionPrograms().find((p) => String(p.id) === String(id) || String(p.code) === String(id)) || null;
}

export function findDisplayProgram(id: string) {
  return getDisplayPrograms().find((p) => String(p.id) === String(id) || String(p.code) === String(id)) || null;
}

export function promotionLabel(id: string) {
  const p = findPromotion(id);
  return p ? p.name : id;
}

export function displayLabel(id: string) {
  const p = findDisplayProgram(id);
  return p ? p.name : id;
}

export function storiesLinkedToPromotion(programId: string): TsStory[] {
  const id = String(programId);
  return getStories().filter((s) => (s.promotionProgramIds || []).map(String).includes(id));
}

export function storiesLinkedToDisplay(programId: string): TsStory[] {
  const id = String(programId);
  return getStories().filter((s) => (s.displayProgramIds || []).map(String).includes(id));
}

export function getStoriesByPromotion(programId: string) {
  return storiesLinkedToPromotion(programId);
}

export function getStoriesByDisplayProgram(programId: string) {
  return storiesLinkedToDisplay(programId);
}

export function activePromotionsForApp() {
  return getPromotionPrograms().filter(isActiveProgram);
}

export function activeDisplaysForApp() {
  return getDisplayPrograms().filter(isActiveProgram);
}

export type { PromoItem, DisplayProgram };
