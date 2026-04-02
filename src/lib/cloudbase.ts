// CloudBase SDK 初始化 — 仅客户端使用
// 通过 dynamic import 避免 SSR 时引入 Node.js 模块

let dbPromise: Promise<unknown> | null = null;

export async function getDb() {
  if (typeof window === 'undefined') return null;

  if (!dbPromise) {
    dbPromise = (async () => {
      const { weddingConfig } = await import('@/config/wedding');
      if (!weddingConfig.cloudbase.envId) return null;

      const cloudbase = (await import('@cloudbase/js-sdk')).default;
      const app = cloudbase.init({
        env: weddingConfig.cloudbase.envId,
      });

      const auth = app.auth({ persistence: 'local' });
      const loginState = await auth.getLoginState();
      if (!loginState) {
        await auth.signInAnonymously();
      }

      return app.database();
    })();
  }

  return dbPromise;
}
