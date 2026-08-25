/**
 * Centralized status mapping for StatusTag.
 * Labels/codes scanned from Prototype source. Colors from eco-dms-dev Ant Design Tag
 * + design-system (Đã duyệt filled primary).
 */
(function (DMS) {
  'use strict';

  const STATUS_CONFIG = {
    DRAFT: { label: 'Khởi tạo', variant: 'draft' },
    INIT: { label: 'Khởi tạo', variant: 'draft' },
    'Khởi tạo': { label: 'Khởi tạo', variant: 'draft' },

    APPROVED: { label: 'Đã duyệt', variant: 'approved' },
    'Đã duyệt': { label: 'Đã duyệt', variant: 'approved' },

    REJECTED: { label: 'Từ chối', variant: 'rejected' },
    'Từ chối': { label: 'Từ chối', variant: 'rejected' },
    'Từ chối duyệt': { label: 'Từ chối duyệt', variant: 'rejected' },
    'Từ chối trả thưởng': { label: 'Từ chối trả thưởng', variant: 'rejected' },

    PENDING: { label: 'Chờ duyệt', variant: 'pending' },
    'Chờ duyệt': { label: 'Chờ duyệt', variant: 'pending' },
    'Đang chờ duyệt': { label: 'Đang chờ duyệt', variant: 'pending' },
    'Đang xử lý': { label: 'Đang xử lý', variant: 'info' },
    PROCESSING: { label: 'Đang xử lý', variant: 'info' },

    UPCOMING: { label: 'Sắp diễn ra', variant: 'warning' },
    'Sắp diễn ra': { label: 'Sắp diễn ra', variant: 'warning' },
    NOT_STARTED: { label: 'Chưa diễn ra', variant: 'warning' },
    'Chưa diễn ra': { label: 'Chưa diễn ra', variant: 'warning' },

    RUNNING: { label: 'Đang diễn ra', variant: 'running' },
    'Đang diễn ra': { label: 'Đang diễn ra', variant: 'running' },

    PAUSED: { label: 'Tạm ngưng', variant: 'warning' },
    'Tạm ngưng': { label: 'Tạm ngưng', variant: 'warning' },

    ENDED: { label: 'Kết thúc', variant: 'ended' },
    'Kết thúc': { label: 'Kết thúc', variant: 'ended' },
    'Đã kết thúc': { label: 'Đã kết thúc', variant: 'ended' },

    EXPIRED: { label: 'Hết hạn', variant: 'warning' },
    'Hết hạn': { label: 'Hết hạn', variant: 'warning' },
    'Hết hạn duyệt': { label: 'Hết hạn duyệt', variant: 'warning' },
    'Hết hạn trả thưởng': { label: 'Hết hạn trả thưởng', variant: 'warning' },
    'Hết hiệu lực': { label: 'Hết hiệu lực', variant: 'warning' },
    'Chưa hiệu lực': { label: 'Chưa hiệu lực', variant: 'warning' },
    'Đang hiệu lực': { label: 'Đang hiệu lực', variant: 'running' },
    'Nháp': { label: 'Nháp', variant: 'draft' },
    'Đã xuất bản': { label: 'Đã xuất bản', variant: 'approved' },

    CANCELLED: { label: 'Đã hủy', variant: 'cancelled' },
    'Đã hủy': { label: 'Đã hủy', variant: 'cancelled' },

    ACTIVE: { label: 'Hoạt động', variant: 'active' },
    'Hoạt động': { label: 'Hoạt động', variant: 'active' },
    'Đang hoạt động': { label: 'Đang hoạt động', variant: 'active' },
    'Đang áp dụng': { label: 'Đang áp dụng', variant: 'active' },

    INACTIVE: { label: 'Không hoạt động', variant: 'inactive' },
    'Không hoạt động': { label: 'Không hoạt động', variant: 'inactive' },
    STOPPED: { label: 'Ngưng hoạt động', variant: 'inactive' },
    'Ngưng hoạt động': { label: 'Ngưng hoạt động', variant: 'inactive' },

    SUCCESS: { label: 'Thành công', variant: 'running' },
    'Thành công': { label: 'Thành công', variant: 'running' },
    'Đã gửi': { label: 'Đã gửi', variant: 'running' },
    'Đã xem': { label: 'Đã xem', variant: 'running' },
    'Đã giải quyết': { label: 'Đã giải quyết', variant: 'running' },
    'Hoàn thành': { label: 'Hoàn thành', variant: 'running' },
    IMPORTED: { label: 'Nhập hàng hoàn tất', variant: 'active' },
    'Nhập hàng hoàn tất': { label: 'Nhập hàng hoàn tất', variant: 'active' },
    'Đã nhập hàng': { label: 'Đã nhập hàng', variant: 'active' },

    FAILED: { label: 'Thất bại', variant: 'rejected' },
    'Thất bại': { label: 'Thất bại', variant: 'rejected' },

    'Chưa nhận': { label: 'Chưa nhận', variant: 'default' },
    'Chưa xem': { label: 'Chưa xem', variant: 'warning' },
    'Chưa nhập hàng': { label: 'Chưa nhập hàng', variant: 'default' },
    NOT_IMPORTED: { label: 'Chưa nhập hàng', variant: 'default' },
    IMPORTING: { label: 'Đang nhập hàng', variant: 'info' },
    'Đang nhập hàng': { label: 'Đang nhập hàng', variant: 'info' },

    WAITING: { label: 'Chờ trả thưởng', variant: 'pending' },
    'Chờ trả thưởng': { label: 'Chờ trả thưởng', variant: 'pending' },
    RECEIVED: { label: 'Đã nhận thưởng', variant: 'running' },
    'Đã nhận thưởng': { label: 'Đã nhận thưởng', variant: 'running' },
    'Đã trả thưởng': { label: 'Đã trả thưởng', variant: 'running' },

    PASS: { label: 'Đạt', variant: 'running' },
    'Đạt': { label: 'Đạt', variant: 'running' },
    FAIL: { label: 'Không đạt', variant: 'rejected' },
    'Không đạt': { label: 'Không đạt', variant: 'rejected' },

    'Đã gán tuyến': { label: 'Đã gán tuyến', variant: 'running' },
    'Đã khóa': { label: 'Đã khóa', variant: 'cancelled' }
  };

  function resolveStatus(status) {
    const key = String(status == null ? '' : status).trim();
    if (!key) return { label: '', variant: 'default' };
    return STATUS_CONFIG[key] || STATUS_CONFIG[key.toUpperCase()] || { label: key, variant: 'default' };
  }

  DMS.STATUS_CONFIG = STATUS_CONFIG;
  DMS.resolveStatus = resolveStatus;
})(window.DMS);
