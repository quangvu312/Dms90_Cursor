import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { EcoDmsLogo } from './EcoDmsLogo';
import { GeometricBg } from './GeometricBg';
import { RobotIllustration } from './RobotIllustration';
import { useAuth } from '../context/AuthContext';
import type { ViewMode, LoginForm } from '../types';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [viewMode, setViewMode] = useState<ViewMode>('admin');
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.username.trim() || !form.password) {
      setError('Vui lòng nhập đầy đủ tài khoản và mật khẩu.');
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      const result = login(form.username, form.password, viewMode);
      setLoading(false);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      const from = (location.state as { from?: string } | null)?.from;
      navigate(from && from !== '/login' ? from : '/admin/dashboard', { replace: true });
    }, 400);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8eeff 45%, #ede9f6 100%)' }}
    >
      <GeometricBg />

      <div className="relative z-10 flex w-full max-w-5xl mx-auto px-8 items-center gap-8">
        {/* Left illustration */}
        <div className="flex-1 hidden lg:flex items-center justify-center select-none">
          <RobotIllustration />
        </div>

        {/* Login card */}
        <div
          className="flex-shrink-0 bg-white rounded-2xl p-9"
          style={{ width: 400, boxShadow: '0 12px 48px rgba(99,102,241,0.12), 0 2px 12px rgba(0,0,0,0.07)' }}
        >
          <EcoDmsLogo />
          <p className="text-center text-slate-400 text-xs mb-7 tracking-wide">
            Hệ thống quản lý nhân viên kinh doanh
          </p>

          {/* View toggle */}
          <div className="flex bg-slate-100 rounded-xl p-1 mb-6 gap-1">
            {([{ key: 'admin', label: 'Admin HO' }, { key: 'npp', label: 'NPP' }] as { key: ViewMode; label: string }[]).map(
              ({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setViewMode(key)}
                  className={`flex-1 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                    viewMode === key ? 'bg-white shadow-md text-slate-800' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {label}
                </button>
              )
            )}
          </div>

          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Đăng nhập</h2>

          {error ? (
            <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-xs text-red-600">
              {error}
            </p>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-400 transition-colors" />
              <input
                type="text"
                placeholder="Nhập vào tài khoản."
                value={form.username}
                onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-400 transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Nhập vào mật khẩu."
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                className="w-full pl-10 pr-11 py-3 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-sm text-white mt-2 transition-all duration-200 disabled:opacity-70 active:scale-[0.99] shadow-lg"
              style={{ background: loading ? '#475569' : 'linear-gradient(135deg, #1e3a5f, #2d5282)' }}
            >
              {loading ? 'Đang xử lý...' : 'Đăng nhập'}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-5">
            Đăng nhập với tư cách&nbsp;
            <span className={`font-semibold ${viewMode === 'admin' ? 'text-indigo-500' : 'text-emerald-500'}`}>
              {viewMode === 'admin' ? 'Admin Head Office' : 'Nhà Phân Phối'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
