'use client';

import { useState } from 'react';

type Row = {
  id: number;
  name: string;
  count: number;
  message: string | null;
  venue: string;
  variant: string;
  submitted_at: string;
};

type StatRow = {
  venue: string;
  submissions: number;
  attendees: number;
  blessings_only: number;
};

type Data = { rows: Row[]; stats: StatRow[] };

const VENUE_TABS = ['全部', '招远', '潍坊'] as const;
type Tab = (typeof VENUE_TABS)[number];

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<Tab>('全部');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/rsvps?p=${encodeURIComponent(password)}`);
      if (!res.ok) {
        setError(res.status === 401 ? '密码错误' : '服务器错误，请稍后重试');
        return;
      }
      setData(await res.json());
    } catch {
      setError('网络错误');
    } finally {
      setLoading(false);
    }
  }

  async function handleRefresh() {
    if (!data) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/rsvps?p=${encodeURIComponent(password)}`);
      if (res.ok) setData(await res.json());
    } finally {
      setLoading(false);
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-2xl font-semibold text-gray-800">婚礼回执后台</p>
            <p className="text-sm text-gray-400">林洋洋 & 王文靖</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="请输入管理密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 bg-gray-50"
              autoFocus
            />
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-xl bg-rose-500 text-white text-sm font-medium disabled:opacity-40 hover:bg-rose-600 transition-colors"
            >
              {loading ? '验证中…' : '进入后台'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredRows = tab === '全部' ? data.rows : data.rows.filter((r) => r.venue === tab);

  const totalSubmissions = data.rows.length;
  const totalAttendees = data.rows.reduce((s, r) => s + (r.count > 0 ? r.count : 0), 0);

  function getStat(venue: string) {
    return data!.stats.find((s) => s.venue === venue) ?? { submissions: 0, attendees: 0, blessings_only: 0 };
  }

  const zhaoStat = getStat('招远');
  const weifStat = getStat('潍坊');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶栏 */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-gray-800">婚礼回执后台</span>
            <span className="text-xs text-gray-400">林洋洋 & 王文靖</span>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="text-xs text-gray-400 hover:text-gray-600 disabled:opacity-40 transition-colors"
          >
            {loading ? '刷新中…' : '刷新数据'}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* 统计卡片 */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="总提交" value={totalSubmissions} unit="份" color="gray" />
          <StatCard label="出席总人数" value={totalAttendees} unit="位" color="rose" />
          <StatCard
            label="招远场"
            value={zhaoStat.submissions}
            unit="份"
            sub={`出席 ${zhaoStat.attendees} 位`}
            color="amber"
          />
          <StatCard
            label="潍坊场"
            value={weifStat.submissions}
            unit="份"
            sub={`出席 ${weifStat.attendees} 位`}
            color="sky"
          />
        </div>

        {/* Tab 栏 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-100">
            {VENUE_TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  tab === t
                    ? 'text-rose-500 border-b-2 border-rose-500 bg-rose-50/50'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t}
                {t !== '全部' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({getStat(t).submissions})
                  </span>
                )}
                {t === '全部' && (
                  <span className="ml-1.5 text-xs opacity-60">({totalSubmissions})</span>
                )}
              </button>
            ))}
          </div>

          {/* 表格 */}
          {filteredRows.length === 0 ? (
            <div className="py-16 text-center text-sm text-gray-300">暂无回执</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 bg-gray-50/60">
                    <th className="px-4 py-3 text-left font-medium w-8">#</th>
                    <th className="px-4 py-3 text-left font-medium">姓名</th>
                    <th className="px-4 py-3 text-left font-medium">人数</th>
                    <th className="px-4 py-3 text-left font-medium">场地</th>
                    <th className="px-4 py-3 text-left font-medium hidden sm:table-cell">祝福留言</th>
                    <th className="px-4 py-3 text-left font-medium hidden sm:table-cell">提交时间</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredRows.map((row, i) => (
                    <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3.5 text-gray-300 tabular-nums">{i + 1}</td>
                      <td className="px-4 py-3.5 font-medium text-gray-700">{row.name}</td>
                      <td className="px-4 py-3.5">
                        {row.count === 0 ? (
                          <span className="text-gray-300 text-xs">仅祝福</span>
                        ) : (
                          <span className="text-rose-500 font-medium">{row.count} 位</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5">
                        <VenueBadge venue={row.venue} />
                      </td>
                      <td className="px-4 py-3.5 text-gray-400 max-w-xs truncate hidden sm:table-cell">
                        {row.message || <span className="text-gray-200">—</span>}
                      </td>
                      <td className="px-4 py-3.5 text-gray-300 text-xs tabular-nums whitespace-nowrap hidden sm:table-cell">
                        {new Date(row.submitted_at).toLocaleString('zh-CN', {
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  unit,
  sub,
  color,
}: {
  label: string;
  value: number;
  unit: string;
  sub?: string;
  color: 'gray' | 'rose' | 'amber' | 'sky';
}) {
  const colors = {
    gray: 'bg-white',
    rose: 'bg-rose-50',
    amber: 'bg-amber-50',
    sky: 'bg-sky-50',
  };
  const textColors = {
    gray: 'text-gray-700',
    rose: 'text-rose-600',
    amber: 'text-amber-600',
    sky: 'text-sky-600',
  };
  return (
    <div className={`${colors[color]} rounded-2xl border border-gray-100 shadow-sm px-4 py-4 space-y-1`}>
      <p className="text-xs text-gray-400">{label}</p>
      <p className={`text-2xl font-semibold tabular-nums ${textColors[color]}`}>
        {value}
        <span className="text-sm font-normal ml-0.5">{unit}</span>
      </p>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
  );
}

function VenueBadge({ venue }: { venue: string }) {
  if (venue === '招远') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600">
        招远
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sky-50 text-sky-600">
      潍坊
    </span>
  );
}
