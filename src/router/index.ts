import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { setupRouterGuard } from './guard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    meta: { label: '登录' },
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    meta: { label: '首页' },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App): void {
  app.use(router);
  // 创建路由守卫
  setupRouterGuard();
}

export default router;
