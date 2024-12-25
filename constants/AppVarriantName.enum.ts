export enum AppVariantName {
    PROD = 'prod',
    DEV = 'dev',
    STAGING = 'staging',
}

export const CURRENT_APP_VARIANT = process.env['EXPO_PUBLIC_APP_VARIANT'] as AppVariantName;
