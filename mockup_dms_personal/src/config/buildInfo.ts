export const BUILD_INFO = {
  environment: 'HT-uat',
  version: 'v0.0.1',
  buildNumber: '131',
  appVersion: 'V2.26.2.1',
  copyright: '© 2024 Produced by The development team of FinViet Corp',
} as const;

export function formatBuildInfoLabel() {
  return `${BUILD_INFO.version} (${BUILD_INFO.buildNumber})`;
}

export function formatFooterBuildInfo() {
  return `${BUILD_INFO.copyright}, ${BUILD_INFO.appVersion}`;
}
