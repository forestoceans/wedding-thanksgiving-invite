import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, count, message } = await req.json();

  if (!name?.trim()) {
    return NextResponse.json({ error: 'name required' }, { status: 400 });
  }

  const user = 'oceans-mail@qq.com';
  const pass = process.env.QQ_SMTP_PASS;
  const recipients = 'oceans-mail@qq.com,2275545602@qq.com';

  if (!pass) {
    console.error('[rsvp] Missing QQ_SMTP_PASS env var');
    return NextResponse.json({ error: 'server misconfigured' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const text = [
    `姓名：${name}`,
    `出席人数：${count === 0 ? '0（无法出席，仅送祝福）' : `${count} 位`}`,
    `祝福留言：${message || '（无）'}`,
  ].join('\n');

  await transporter.sendMail({
    from: `"婚礼回执" <${user}>`,
    to: recipients,
    subject: `[婚礼回执] ${name} ${count === 0 ? '送上祝福（无法出席）' : '确认出席'}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
