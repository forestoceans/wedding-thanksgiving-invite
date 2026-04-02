import { weddingConfig } from '@/config/wedding';
import Divider from './Divider';

const c = weddingConfig;

export default function EventDetails() {
  return (
    <section className="bg-cream px-6 py-16 text-center">
      <div className="max-w-sm mx-auto space-y-8">
        {/* 小标题 */}
        <p className="text-text-muted text-xs tracking-[0.4em]">
          良 辰 吉 日
        </p>

        {/* 公历日期 */}
        <div className="space-y-2">
          <p className="text-text-title text-2xl font-light tracking-[0.4em]">
            {c.date}
          </p>
          <p className="text-text-muted text-xs tracking-wider">
            {c.dateLunar}
          </p>
        </div>

        <Divider />

        {/* 时间 */}
        <div className="space-y-2">
          <p className="text-red-primary text-lg tracking-[0.3em] font-medium">
            {c.time}
          </p>
          <p className="text-text-muted text-xs tracking-wider">
            恭候光临
          </p>
        </div>
      </div>
    </section>
  );
}
