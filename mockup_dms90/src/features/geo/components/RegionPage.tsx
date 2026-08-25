import { useState } from 'react';
import {
  ChevronRight,
  Eye,
  FileSpreadsheet,
  Pencil,
  Plus,
  TreePine,
  X,
} from 'lucide-react';

type DistrictProvince = {
  id: string;
  name: string;
  districts: string[];
};

type AreaItem = {
  id: string;
  name: string;
  on: boolean;
  provinces: DistrictProvince[];
};

type RegionItem = {
  id: string;
  name: string;
  on: boolean;
  areas: AreaItem[];
};

const initialData: RegionItem[] = [
  {
    id: 'r1',
    name: 'HANOI',
    on: true,
    areas: [
      {
        id: 'a1',
        name: 'Mekong2',
        on: true,
        provinces: [
          {
            id: 'p1',
            name: 'AN GIANG',
            districts: ['Phường Bình Đức', 'Phường Chi Lăng', 'Phường Châu Đốc'],
          },
          {
            id: 'p2',
            name: 'CA MAU',
            districts: ['Phường 1', 'Phường 2', 'Phường 3'],
          },
        ],
      },
      {
        id: 'a2',
        name: 'Mekong1',
        on: true,
        provinces: [
          {
            id: 'p3',
            name: 'LONG AN',
            districts: ['Tân An', 'Bến Lức', 'Đức Hòa'],
          },
          {
            id: 'p4',
            name: 'TIỀN GIANG',
            districts: ['Mỹ Tho', 'Gò Công', 'Cai Lậy'],
          },
        ],
      },
    ],
  },
  {
    id: 'r2',
    name: 'NORTH',
    on: true,
    areas: [
      {
        id: 'a3',
        name: 'Bắc Area 1',
        on: true,
        provinces: [
          {
            id: 'p5',
            name: 'HÀ NỘI',
            districts: ['Hoàn Kiếm', 'Đống Đa', 'Ba Đình'],
          },
          {
            id: 'p6',
            name: 'HẢI PHÒNG',
            districts: ['Hồng Bàng', 'Lê Chân', 'Ngô Quyền'],
          },
        ],
      },
    ],
  },
  {
    id: 'r3',
    name: '[Th.Vi] Vĩnh Long',
    on: true,
    areas: [],
  },
  {
    id: 'r4',
    name: 'CENTRAL',
    on: true,
    areas: [
      {
        id: 'a4',
        name: 'Central Area',
        on: true,
        provinces: [
          {
            id: 'p7',
            name: 'ĐÀ NẴNG',
            districts: ['Hải Châu', 'Thanh Khê', 'Sơn Trà'],
          },
        ],
      },
    ],
  },
];

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex h-32 flex-col items-center justify-center gap-2 text-slate-300">
      <ChevronRight className="h-6 w-6" />
      <p className="text-xs text-slate-400">{message}</p>
    </div>
  );
}

export function RegionPage() {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState<'config' | 'tree'>('config');
  const [selectedRegionId, setSelectedRegionId] = useState('r1');
  const [selectedAreaId, setSelectedAreaId] = useState('a1');
  const [selectedProvinceId, setSelectedProvinceId] = useState('p1');

  const selectedRegion = data.find((item) => item.id === selectedRegionId);
  const selectedArea = selectedRegion?.areas.find((item) => item.id === selectedAreaId);

  const toggleRegion = (id: string) => {
    setData((prev) => prev.map((item) => (item.id === id ? { ...item, on: !item.on } : item)));
  };

  const toggleArea = (id: string) => {
    setData((prev) =>
      prev.map((region) =>
        region.id === selectedRegionId
          ? {
              ...region,
              areas: region.areas.map((area) => (area.id === id ? { ...area, on: !area.on } : area)),
            }
          : region,
      ),
    );
  };

  const selectRegion = (id: string) => {
    setSelectedRegionId(id);
    setSelectedAreaId('');
    setSelectedProvinceId('');
  };

  const selectArea = (id: string) => {
    setSelectedAreaId(id);
    setSelectedProvinceId('');
  };

  const selectProvince = (id: string) => {
    setSelectedProvinceId(id);
  };

  return (
    <div className="space-y-4">
      <nav className="flex items-center gap-1.5 text-xs text-slate-500">
        <span className="cursor-pointer hover:text-blue-600">Dữ Liệu Nền</span>
        <span className="text-slate-400">/</span>
        <span className="cursor-pointer hover:text-blue-600">Địa Lý</span>
        <span className="text-slate-400">/</span>
        <span className="font-medium text-slate-700">Phân Vùng</span>
      </nav>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Phân Vùng</h1>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex border-b border-slate-200">
          <button
            type="button"
            className={`border-b-2 px-5 py-2.5 text-sm font-medium transition-colors ${activeTab === 'config' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('config')}
          >
            Cấu hình phân cấp vùng
          </button>
          <button
            type="button"
            className={`border-b-2 px-5 py-2.5 text-sm font-medium transition-colors ${activeTab === 'tree' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('tree')}
          >
            Cây phân cấp vùng
          </button>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          <FileSpreadsheet className="h-4 w-4 text-green-600" />
          Export Excel
        </button>
      </div>

      {activeTab === 'config' ? (
        <div className="grid gap-3 xl:grid-cols-3 md:grid-cols-3">
          <div className="flex min-h-[560px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-sm font-semibold text-slate-800">Vùng</span>
              <button type="button" className="flex items-center gap-1 rounded-lg bg-blue-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-800">
                <Plus className="h-3 w-3" />
                Tạo vùng
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {data.map((region) => (
                <div
                  key={region.id}
                  className={`flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3 transition-colors ${selectedRegionId === region.id ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                  onClick={() => selectRegion(region.id)}
                >
                  <span className="flex-1 truncate text-sm text-slate-700">{region.name}</span>
                  <div className="flex items-center gap-2">
                    <button type="button" className="text-slate-400 transition-colors hover:text-blue-600" onClick={(event) => event.stopPropagation()}>
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${region.on ? 'bg-blue-900' : 'bg-slate-300'}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleRegion(region.id);
                      }}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${region.on ? 'translate-x-4' : 'translate-x-1'}`} />
                    </button>
                    <button type="button" className="text-slate-400 transition-colors hover:text-blue-600" onClick={(event) => event.stopPropagation()}>
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <ChevronRight className={`h-3.5 w-3.5 ${selectedRegionId === region.id ? 'text-blue-600' : 'text-slate-300'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[560px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-sm font-semibold text-slate-800">Khu vực</span>
              <button type="button" className="flex items-center gap-1 rounded-lg bg-blue-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-800">
                <Plus className="h-3 w-3" />
                Tạo khu vực
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {!selectedRegion || !selectedRegion.areas.length ? (
                <EmptyState message={selectedRegion ? 'Vùng này chưa có khu vực' : 'Chọn vùng để xem khu vực'} />
              ) : (
                selectedRegion.areas.map((area) => (
                  <div
                    key={area.id}
                    className={`flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3 transition-colors ${selectedAreaId === area.id ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                    onClick={() => selectArea(area.id)}
                  >
                    <span className="flex-1 truncate text-sm text-slate-700">{area.name}</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="text-slate-400 transition-colors hover:text-blue-600" onClick={(event) => event.stopPropagation()}>
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${area.on ? 'bg-blue-900' : 'bg-slate-300'}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleArea(area.id);
                        }}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${area.on ? 'translate-x-4' : 'translate-x-1'}`} />
                      </button>
                      <button type="button" className="text-slate-400 transition-colors hover:text-blue-600" onClick={(event) => event.stopPropagation()}>
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <ChevronRight className={`h-3.5 w-3.5 ${selectedAreaId === area.id ? 'text-blue-600' : 'text-slate-300'}`} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex min-h-[560px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-sm font-semibold text-slate-800">Tỉnh/Thành phố</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {!selectedArea || !selectedArea.provinces.length ? (
                <EmptyState message={selectedArea ? 'Khu vực chưa có tỉnh/thành phố' : 'Chọn khu vực để xem tỉnh'} />
              ) : (
                selectedArea.provinces.map((province) => (
                  <div
                    key={province.id}
                    className={`flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3 transition-colors ${selectedProvinceId === province.id ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                    onClick={() => selectProvince(province.id)}
                  >
                    <span className="flex-1 truncate text-sm text-slate-700">{province.name}</span>
                    <button type="button" className="text-slate-400 transition-colors hover:text-red-500" onClick={(event) => event.stopPropagation()}>
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[560px] items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col items-center gap-3 text-slate-400">
            <TreePine className="h-12 w-12 text-slate-200" />
            <p className="text-sm">Cây phân cấp vùng — Đang phát triển</p>
          </div>
        </div>
      )}
    </div>
  );
}
