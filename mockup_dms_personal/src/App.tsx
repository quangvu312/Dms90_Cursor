import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import { LoginPage } from './features/auth/components/LoginPage';
import { GuestRoute } from './features/auth/components/GuestRoute';
import { ProtectedRoute } from './features/auth/components/ProtectedRoute';
import { RegionPage } from './features/geo/components/RegionPage';
import { AdminHOLayout } from './layouts/adminHO/AdminHOLayout';
import ContactManagementPage from './features/contacts/components/ContactManagementPage';
import CustomerManagementPage from './features/customer/components/CustomerManagementPage';
import { DashboardPage } from './features/dashboard/components/DashboardPage';
import { SalesAppPrototypePage } from './features/salesApp/components/SalesAppPrototypePage';
import { SalesAppChrome } from './features/salesApp/components/SalesAppChrome';
import { SalesAppLoginPage } from './features/salesApp/components/SalesAppLoginPage';
import { ContractCustomerPage, ContractTemplatePage } from './features/contract/components/ContractListPage';
import { MappedPrototypePage, PrototypeSplatPage } from './features/prototypeHost/PrototypePage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <GuestRoute homePath="/admin/dashboard">
                <LoginPage />
              </GuestRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute loginPath="/login">
                <AdminHOLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="du-lieu-nen/dia-ly/phan-vung" element={<RegionPage />} />
            <Route path="du-lieu-nen/kinh-doanh/danh-sach-lien-he" element={<ContactManagementPage />} />
            <Route path="du-lieu-nen/kinh-doanh/danh-sach-khach-hang" element={<CustomerManagementPage />} />
            <Route path="quan-ly-hop-dong/hop-dong-mau" element={<ContractTemplatePage />} />
            <Route path="quan-ly-hop-dong/hop-dong-khach-hang" element={<ContractCustomerPage />} />
            <Route path="quan-ly-hop-dong/danh-sach-hop-dong" element={<Navigate to="/admin/quan-ly-hop-dong/hop-dong-khach-hang" replace />} />
            <Route path="page/*" element={<PrototypeSplatPage />} />
            <Route path="*" element={<MappedPrototypePage />} />
          </Route>

          {/* Login SM — ngoài ProtectedRoute để không bị đẩy sang login portal */}
          <Route
            path="/sales-app/login"
            element={
              <GuestRoute homePath="/sales-app/vieng-tham">
                <SalesAppChrome>
                  <SalesAppLoginPage />
                </SalesAppChrome>
              </GuestRoute>
            }
          />
          <Route path="/sales-app" element={<Navigate to="/sales-app/login" replace />} />
          <Route
            path="/sales-app/*"
            element={
              <ProtectedRoute loginPath="/sales-app/login">
                <SalesAppPrototypePage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
