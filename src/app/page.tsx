export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf6f0] flex items-center justify-center px-6 py-16">
      <div className="max-w-sm w-full text-center space-y-8">

        {/* 顶部装饰 */}
        <div className="text-rose-300 text-3xl tracking-widest">囍</div>

        {/* 邀请语 */}
        <p className="text-gray-400 text-sm tracking-[0.3em]">敬请光临</p>

        {/* 主标题 */}
        <div className="space-y-2">
          <h1 className="text-2xl font-light tracking-[0.4em] text-gray-700">
            结婚答谢宴
          </h1>
        </div>

        {/* 分割线 */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-rose-200" />
          <span className="text-rose-300 text-xs">❀</span>
          <div className="flex-1 h-px bg-rose-200" />
        </div>

        {/* 新人姓名 */}
        <div className="space-y-1">
          <p className="text-xs text-gray-400 tracking-widest">新郎 &amp; 新娘</p>
          <p className="text-3xl font-light tracking-[0.5em] text-gray-800">
            林洋洋
          </p>
          <p className="text-rose-300 text-lg">✦</p>
          <p className="text-3xl font-light tracking-[0.5em] text-gray-800">
            王文靖
          </p>
        </div>

        {/* 分割线 */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-rose-200" />
          <span className="text-rose-300 text-xs">❀</span>
          <div className="flex-1 h-px bg-rose-200" />
        </div>

        {/* 日期时间 */}
        <div className="space-y-3">
          <div>
            <p className="text-lg tracking-widest text-gray-700">
              二零二六年五月二日
            </p>
            <p className="text-xs text-gray-400 mt-1 tracking-wider">
              农历丙午年三月十六日 · 星期六
            </p>
          </div>
          <p className="text-base tracking-widest text-rose-500">
            中午十一时三十八分
          </p>
        </div>

        {/* 地点 */}
        <div className="bg-white/60 rounded-2xl px-6 py-5 space-y-1 border border-rose-100">
          <p className="text-xs text-gray-400 tracking-widest mb-2">宴会地点</p>
          <p className="text-base text-gray-700 tracking-wider leading-relaxed">
            金都绿洲生态园
          </p>
          <p className="text-sm text-gray-500 tracking-wider">
            水晶宴会厅（2号大厅）
          </p>
        </div>

        {/* 分割线 */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-rose-200" />
          <span className="text-rose-300 text-xs">❀</span>
          <div className="flex-1 h-px bg-rose-200" />
        </div>

        {/* 落款 */}
        <div className="space-y-1">
          <p className="text-xs text-gray-400 tracking-widest">敬邀</p>
          <p className="text-base tracking-[0.4em] text-gray-600">
            林洪权 · 胡洪兰
          </p>
        </div>

        {/* 底部装饰 */}
        <div className="text-rose-200 text-2xl tracking-widest">· · ·</div>

      </div>
    </main>
  );
}
