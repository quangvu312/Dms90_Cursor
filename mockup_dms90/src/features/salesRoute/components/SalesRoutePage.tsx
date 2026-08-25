import { useState, useCallback } from 'react';
import { RouteFilterBar } from './RouteFilterBar';
import { RouteTable } from './RouteTable';
import { RouteEditModal } from './RouteEditModal';
import { useRouteFilter } from '../hooks/useRouteFilter';
import { MOCK_ROUTES } from '../mockData';
import type { Route } from '../types';

export function SalesRoutePage() {
  const [routes, setRoutes] = useState<Route[]>(MOCK_ROUTES);
  const [modalRoute, setModalRoute] = useState<Route | null>(null);
  const [modalTab, setModalTab]     = useState<'them' | 'gan'>('them');

  const {
    filters, paged, filtered, page, size,
    expandedRows, subPages, subSizes,
    setPage, setSize, toggleRow,
    updateSubPage, updateSubSize,
    applyFilters, resetFilters,
  } = useRouteFilter(routes);

  const openModal = useCallback((r: Route) => {
    setModalRoute(r);
    setModalTab('them');
  }, []);

  const closeModal = useCallback(() => setModalRoute(null), []);

  const handleToggleActive = useCallback((id: number, val: boolean) => {
    setRoutes(prev => prev.map(r => r.id === id ? { ...r, active: val } : r));
  }, []);

  return (
    <div className="min-h-full bg-gray-50 px-5 py-5">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1.5">
        <span className="hover:text-blue-500 cursor-pointer">Quản lý tuyến bán hàng</span>
        <span>/</span>
        <span className="text-gray-600 font-medium">Tuyến bán hàng</span>
      </div>

      {/* Page title */}
      <h1 className="text-lg font-bold text-gray-800 mb-4">Tuyến bán hàng</h1>

      {/* Filter */}
      <RouteFilterBar filters={filters} onApply={applyFilters} onReset={resetFilters} />

      {/* Table */}
      <RouteTable
        routes={paged}
        allRoutes={routes}
        total={filtered.length}
        page={page} size={size}
        expandedRows={expandedRows}
        subPages={subPages} subSizes={subSizes}
        onPageChange={setPage} onSizeChange={setSize}
        onToggleRow={toggleRow}
        onSubPageChange={updateSubPage}
        onSubSizeChange={updateSubSize}
        onToggleActive={handleToggleActive}
        onEdit={openModal}
      />

      {/* Edit modal */}
      <RouteEditModal
        route={modalRoute}
        tab={modalTab}
        onTabChange={setModalTab}
        onClose={closeModal}
      />
    </div>
  );
}
