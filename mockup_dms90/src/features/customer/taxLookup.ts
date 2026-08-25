/** Mock tra cứu MST/CCCD qua masothue.com. MST doanh nghiệp: 10 số, hoặc 13 số dạng chi nhánh (xxxxxxxxxx-yyy). CCCD cá nhân: đủ 12 số. */
export type TaxLookupKind = 'company' | 'individual';

export interface TaxLookupAddress {
  city: string;
  ward: string;
  addressLine1: string;
}

export interface TaxLookupResult {
  kind: TaxLookupKind;
  companyName?: string;
  lastName?: string;
  middleName?: string;
  firstName?: string;
  businessType: string;
  taxIssuePlace: string;
  taxIssueDate: string;
  validityStatus?: string;
  address?: TaxLookupAddress;
}

export function detectTaxLookupKind(taxCode: string): TaxLookupKind | null {
  const digits = taxCode.replace(/\D/g, '');
  if (digits.length === 12) return 'individual';
  if (digits.length === 10 || digits.length === 13) return 'company';
  return null;
}

/** Trả về null khi mã sai định dạng (không phải 10/12/13 số) — không gọi "API", để form báo lỗi ngay và cho nhập lại. */
export function lookupTaxCode(taxCode: string): Promise<TaxLookupResult | null> {
  // Simulate Timeout
  if (taxCode === '9999999999') {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT')), 1000);
    });
  }

  const kind = detectTaxLookupKind(taxCode);
  if (!kind) return Promise.resolve(null);

  return new Promise((resolve) => {
    setTimeout(() => {
      if (kind === 'individual') {
        resolve({
          kind,
          lastName: 'Nguyễn',
          middleName: 'Văn',
          firstName: 'An',
          businessType: 'Kinh doanh cá thể',
          taxIssuePlace: 'Cục thuế TP. Hồ Chí Minh',
          taxIssueDate: '2020-03-10',
          validityStatus: 'Người nộp thuế đang hoạt động (đã được cấp GCN ĐKT)',
          // CCCD doesn't return address, user has to enter it
        });
      } else {
        resolve({
          kind,
          companyName: 'Công ty TNHH Thương mại Phúc An',
          businessType: 'Công ty TNHH', // Represents businessType from API
          taxIssuePlace: 'Cục thuế TP. Hồ Chí Minh',
          taxIssueDate: '2019-07-22',
          validityStatus: 'Người nộp thuế đang hoạt động (đã được cấp GCN ĐKT)',
          address: {
            city: 'TP. Hồ Chí Minh',
            ward: 'An Phú',
            addressLine1: '123 Lê Lợi',
          },
        });
      }
    }, 900);
  });
}
