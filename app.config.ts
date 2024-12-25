import { type ExpoConfig } from 'expo/config';

export default (): ExpoConfig => {
    return {
        name: 'Money Honey',
        slug: 'whyajimoneyhoney',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/images/icon.png',
        scheme: 'whyajimoneyhoney',
        userInterfaceStyle: 'automatic',
        newArchEnabled: true,
        splash: {
            image: './assets/images/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.whyaji.whyajimoneyhoney',
            runtimeVersion: {
                policy: 'appVersion',
            },
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/images/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package: 'com.whyaji.whyajimoneyhoney',
            runtimeVersion: '1.3.0',
        },
        web: {
            bundler: 'metro',
            output: 'static',
            favicon: './assets/images/favicon.png',
        },
        plugins: ['expo-router', 'expo-font', 'expo-build-properties'],
        experiments: {
            typedRoutes: true,
        },
        extra: {
            router: {
                origin: false,
            },
            eas: {
                projectId: process.env['EXPO_PUBLIC_PROJECT_ID'],
            },
        },
        owner: 'whyaji',
        updates: {
            url: `https://u.expo.dev/${process.env['EXPO_PUBLIC_PROJECT_ID']}`,
        },
    };
};
