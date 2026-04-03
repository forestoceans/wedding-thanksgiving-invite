'use client';

import { useState, type FormEvent } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setState('submitting');
    fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, count, message }),
    }).catch(() => {});
    await new Promise(r => setTimeout(r, 600));
    setState('success');
  }

  if (state === 'success') {
    return (
      <section className="px-6 py-20 text-center" style={{ background: 'var(--color-parchment)' }}>
        <div className="max-w-xs mx-auto space-y-6">
          <p className="ds-lg tracking-[0.15em]" style={{ color: 'var(--color-rouge)', animation: 'float 3s ease-in-out infinite' }}>♥</p>
          <p className="ds-head tracking-[0.25em]" style={{ color: 'var(--color-ink)' }}>已收到您的回复</p>
          <p className="ds-body tracking-[0.12em]" style={{ color: 'var(--color-ink-ghost)' }}>感谢 {name}，期待与您相见</p>
        </div>
      </section>
    );
  }

  if (state === 'error') {
    return (
      <section className="px-6 py-20 text-center" style={{ background: 'var(--color-parchment)' }}>
        <div className="max-w-xs mx-auto space-y-6">
          <p className="ds-head tracking-[0.25em]" style={{ color: 'var(--color-ink)' }}>提交失败</p>
          <p className="ds-body tracking-[0.12em]" style={{ color: 'var(--color-ink-ghost)' }}>请稍后再试或联系新人</p>
          <button
            onClick={() => setState('idle')}
            className="ds-cap tracking-[0.3em]"
            style={{ color: 'var(--color-rouge)' }}
          >重新填写</button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-20 relative overflow-hidden" style={{ background: 'var(--color-parchment)' }}>
      {/* 淡胭脂晕染 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,89,90,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 max-w-xs mx-auto space-y-10">

        <div className="text-center space-y-3">
          <p className="ds-sub tracking-[0.55em]" style={{ color: 'var(--color-rouge)', opacity: 0.75 }}>出 席 回 执</p>
          <p className="ds-cap tracking-[0.15em]" style={{ color: 'var(--color-ink-ghost)' }}>请告知您的出席信息</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* 姓名 */}
          <div className="space-y-2.5">
            <label className="block ds-cap tracking-[0.3em]" style={{ color: 'var(--color-ink-light)' }}>姓 名</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="请输入您的姓名"
              className="w-full px-0 py-3 bg-transparent ds-body tracking-[0.12em] focus:outline-none transition-colors"
              style={{
                borderBottom: '1px solid rgba(184,150,74,0.35)',
                color: 'var(--color-ink)',
              }}
            />
          </div>

          {/* 出席人数 */}
          <div className="space-y-2.5">
            <label className="block ds-cap tracking-[0.3em]" style={{ color: 'var(--color-ink-light)' }}>出 席 人 数</label>
            <div className="flex items-center gap-6 py-3" style={{ borderBottom: '1px solid rgba(184,150,74,0.35)' }}>
              <button
                type="button"
                onClick={() => setCount(Math.max(1, count - 1))}
                className="w-7 h-7 flex items-center justify-center text-lg leading-none transition-all active:scale-90"
                style={{ border: '1px solid rgba(200,89,90,0.30)', color: 'var(--color-rouge)' }}
              >−</button>
              <span className="ds-head w-6 text-center tabular-nums" style={{ color: 'var(--color-ink)' }}>{count}</span>
              <button
                type="button"
                onClick={() => setCount(Math.min(10, count + 1))}
                className="w-7 h-7 flex items-center justify-center text-lg leading-none transition-all active:scale-90"
                style={{ border: '1px solid rgba(200,89,90,0.30)', color: 'var(--color-rouge)' }}
              >+</button>
              <span className="ds-cap tracking-[0.1em]" style={{ color: 'var(--color-ink-ghost)' }}>位</span>
            </div>
          </div>

          {/* 祝福留言 */}
          <div className="space-y-2.5">
            <label className="block ds-cap tracking-[0.3em]" style={{ color: 'var(--color-ink-light)' }}>
              祝 福 留 言
              <span className="ml-2" style={{ color: 'var(--color-ink-ghost)' }}>（选填）</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="写下您的祝福..."
              rows={3}
              className="w-full px-0 py-3 bg-transparent ds-body tracking-[0.1em] focus:outline-none transition-colors resize-none"
              style={{
                borderBottom: '1px solid rgba(184,150,74,0.35)',
                color: 'var(--color-ink)',
              }}
            />
          </div>

          {/* 提交 */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="w-full py-4 ds-sub tracking-[0.45em] transition-all active:scale-[0.98] disabled:opacity-40"
              style={{
                border: '1px solid rgba(200,89,90,0.40)',
                color: 'var(--color-rouge)',
              }}
            >
              {state === 'submitting' ? '提 交 中 …' : '确 认 出 席'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
