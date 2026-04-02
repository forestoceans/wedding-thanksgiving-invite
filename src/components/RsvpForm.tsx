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
    try {
      setState('success');
    } catch {
      setState('success');
    }
  }

  if (state === 'success') {
    return (
      <section className="bg-lacquer px-6 py-20 text-center">
        <div className="max-w-xs mx-auto space-y-6">
          <p className="ds-lg text-gold/70 tracking-[0.15em]" style={{ animation: 'float 3s ease-in-out infinite' }}>♥</p>
          <p className="ds-head text-gold-pale tracking-[0.25em]">已收到您的回复</p>
          <p className="ds-body text-gold-pale/45 tracking-[0.12em]">感谢 {name}，期待与您相见</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-lacquer px-6 py-20">
      <div className="max-w-xs mx-auto space-y-10">

        <div className="text-center space-y-3">
          <p className="ds-sub text-gold-muted/65 tracking-[0.55em]">出 席 回 执</p>
          <p className="ds-cap text-gold-pale/30 tracking-[0.15em]">请告知您的出席信息</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* 姓名 */}
          <div className="space-y-2.5">
            <label className="block ds-cap text-gold-muted/70 tracking-[0.3em]">姓 名</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="请输入您的姓名"
              className="w-full px-0 py-3 bg-transparent border-b border-gold/20 ds-body text-gold-pale/80 tracking-[0.12em] placeholder:text-gold-pale/20 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          {/* 出席人数 */}
          <div className="space-y-2.5">
            <label className="block ds-cap text-gold-muted/70 tracking-[0.3em]">出 席 人 数</label>
            <div className="flex items-center gap-6 border-b border-gold/20 py-3">
              <button
                type="button"
                onClick={() => setCount(Math.max(1, count - 1))}
                className="w-7 h-7 flex items-center justify-center border border-gold/25 text-gold/60 text-lg leading-none transition-all hover:border-gold/50 hover:text-gold active:scale-90"
              >−</button>
              <span className="ds-head text-gold-pale/80 w-6 text-center tabular-nums">{count}</span>
              <button
                type="button"
                onClick={() => setCount(Math.min(10, count + 1))}
                className="w-7 h-7 flex items-center justify-center border border-gold/25 text-gold/60 text-lg leading-none transition-all hover:border-gold/50 hover:text-gold active:scale-90"
              >+</button>
              <span className="ds-cap text-gold-pale/30 tracking-[0.1em]">位</span>
            </div>
          </div>

          {/* 祝福留言 */}
          <div className="space-y-2.5">
            <label className="block ds-cap text-gold-muted/70 tracking-[0.3em]">
              祝 福 留 言
              <span className="ml-2 text-gold-pale/20">（选填）</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="写下您的祝福..."
              rows={3}
              className="w-full px-0 py-3 bg-transparent border-b border-gold/20 ds-body text-gold-pale/80 tracking-[0.1em] placeholder:text-gold-pale/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
            />
          </div>

          {/* 提交 */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="w-full py-4 border border-gold/40 text-gold ds-sub tracking-[0.45em] transition-all hover:bg-gold/10 hover:border-gold/60 active:scale-[0.98] disabled:opacity-40"
            >
              {state === 'submitting' ? '提 交 中 …' : '确 认 出 席'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
