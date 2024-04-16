import type { Router, RouteLocationNormalized } from 'vue-router';

const isHash = (href: string) => {
  return /^#/.test(href);
};

export function createScrollGuard(router: Router) {
  const body = document.documentElement || document.body;

  router.afterEach(async (to) => {
    const routePath = (to as RouteLocationNormalized & { href: string })?.href;
    if (isHash(routePath)) {
      body.scrollTo(0, 0);
    }

    return true;
  });
}
