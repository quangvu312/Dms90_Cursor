import { useState, useMemo } from 'react';
import type { Route, RouteFilterState } from '../types';
import { DEFAULT_FILTERS } from '../types';

export function useRouteFilter(all: Route[]) {
  const [filters, setFilters]         = useState<RouteFilterState>(DEFAULT_FILTERS);
  const [page, setPage]               = useState(1);
  const [size, setSize]               = useState(10);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [subPages, setSubPages]       = useState<Record<number, number>>({});
  const [subSizes, setSubSizes]       = useState<Record<number, number>>({});

  const filtered = useMemo(() => {
    const { search, diemBan, vung, nppSelected, nvVieng, nvCham, trangThai } = filters;
    return all.filter(r => {
      if (search) {
        const q = search.toLowerCase();
        if (![r.maTuyen, r.tenTuyen, r.nhanVien].some(f => f.toLowerCase().includes(q))) return false;
      }
      if (diemBan) {
        const q = diemBan.toLowerCase();
        if (!r.stores.some(s => [s.ma, s.ten, s.diaChi].some(f => f.toLowerCase().includes(q)))) return false;
      }
      if (vung && r.vung !== vung) return false;
      if (nppSelected.length && !nppSelected.includes(r.npp)) return false;
      if (nvVieng && r.nvVieng !== nvVieng) return false;
      if (nvCham && r.nvCham !== nvCham) return false;
      if (trangThai === '1' && !r.active) return false;
      if (trangThai === '0' && r.active) return false;
      return true;
    });
  }, [all, filters]);

  const paged = useMemo(() => {
    const start = (page - 1) * size;
    return filtered.slice(start, start + size);
  }, [filtered, page, size]);

  const applyFilters = (next: RouteFilterState) => {
    setFilters(next);
    setPage(1);
    setExpandedRows([]);
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
    setExpandedRows([]);
  };

  const toggleRow = (id: number) => {
    setExpandedRows(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      setSubPages(p => ({ ...p, [id]: p[id] ?? 1 }));
      setSubSizes(p => ({ ...p, [id]: p[id] ?? 10 }));
      return [...prev, id];
    });
  };

  const updateSubPage = (routeId: number, p: number) =>
    setSubPages(prev => ({ ...prev, [routeId]: p }));

  const updateSubSize = (routeId: number, s: number) => {
    setSubPages(prev => ({ ...prev, [routeId]: 1 }));
    setSubSizes(prev => ({ ...prev, [routeId]: s }));
  };

  return {
    filters, filtered, paged,
    page, setPage, size, setSize,
    expandedRows, toggleRow,
    subPages, subSizes, updateSubPage, updateSubSize,
    applyFilters, resetFilters,
  };
}
