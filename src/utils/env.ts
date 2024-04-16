import type { GlobEnvConfig, GlobConfig } from '@/types/config';

export function getAppEnvConfig(): GlobConfig {
  const ENV = import.meta.env as unknown as GlobEnvConfig;

  const { VITE_API_DOMAIN, VITE_API_URL } = ENV;

  const env: Readonly<GlobConfig> = {
    apiDomain: VITE_API_DOMAIN,
    apiUrl: VITE_API_URL,
  };

  return env as Readonly<GlobConfig>;
}

/**
 * 环境是否开启mock（仅限本地dev）
 */
export function isUseMock(): boolean {
  return isDev() && import.meta.env.VITE_USE_MOCK === 'true';
}

/**
 * 环境是否为本地dev
 */
export function isDev(): boolean {
  return import.meta.env.VITE_ENV === 'dev';
}

/**
 * 环境是否为生产
 */
export function isProd(): boolean {
  return import.meta.env.VITE_ENV === 'pro';
}
