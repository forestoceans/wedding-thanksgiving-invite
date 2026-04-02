# Wedding Banquet Invitation Page

## Summary

Create a mobile-first wedding banquet invitation web page for a post-wedding thank-you dinner (答谢宴). The page should be a beautiful, festive single-page application with deep red and dark gold color scheme (深红烫金礼盒风), featuring all key event details, a photo carousel, guest RSVP form, and WeChat sharing support.

## Background

The couple (林洋洋 & 王文靖) has already held their wedding ceremony and is now hosting a homecoming banquet to thank guests. The page will be shared primarily via WeChat to invite friends and family. The existing `wechat-article.html` contains the source-of-truth event details that this page must incorporate.

## Key Event Details (from wechat-article.html)

- **Couple**: 林洋洋 & 王文靖
- **Event**: 结婚答谢宴
- **Date**: 2026年5月2日（农历丙午年三月十六日 · 星期六）
- **Time**: 11:38 午宴
- **Venue**: 金都绿洲生态园 · 水晶宴会厅（2号大厅）

> **Note**: The image provided by the user shows slightly different details (date: 5月4日, venue: 潍坊金庆大酒店5楼, parents: 王少伟和孙凤丽). The user should confirm which set of details to use — see Open Questions.

## Requirements

### Visual Design & Theme

- **Color palette**: Deep red (#8B0000 ~ #A52A2A range) as primary, dark/antique gold (#B8860B ~ #D4A017 range) as accent — 深红烫金礼盒风 (deep crimson + gilded gift box style)
- Festive, elegant Chinese wedding aesthetic
- Use traditional Chinese ornamental elements (e.g. 囍 character, floral borders, traditional patterns)
- Typography: serif/Song style fonts for Chinese text to match the traditional feel

### Mobile-First Layout

- Designed primarily for mobile viewport (375px as base)
- Responsive — should look acceptable on tablet/desktop but mobile is the priority
- Smooth scrolling single-page layout
- Sections flow vertically like a digital invitation card

### Page Sections (top to bottom)

1. **Hero / Cover**: Large festive header with couple's names, 囍 symbol, and event title (答谢宴)
2. **Event Details**: Date, time (with lunar calendar), and venue information
3. **Venue Map / Location**: Venue name and address, optionally with a link to map
4. **Photo Carousel**: Swipeable image gallery; image URLs should be configurable via a config array
5. **RSVP Form**: Guests can submit how many people will attend (name + number of attendees)
6. **Footer**: Blessing message and couple's names

### Photo Carousel

- Configurable list of image URLs (defined in a config file or constant)
- Auto-play with manual swipe/tap navigation
- Indicator dots for current position
- Smooth transitions

### RSVP / Guest Form

- Fields: Guest name (姓名), Number of attendees (出席人数), Optional message/blessing (祝福留言)
- Submit to a backend API endpoint (the specific endpoint can be configured later)
- Show a success confirmation after submission
- Basic validation (name required, attendee count >= 1)

### WeChat JS-SDK Integration

- Configure `wx.config` for WeChat JS-SDK
- **Share to chat (发送给朋友)**: Custom title, description, link, and icon image
- **Share to Moments (分享到朋友圈)**: Custom title, link, and icon image
- All share metadata (title, desc, icon URL) should be configurable
- Graceful degradation when not in WeChat browser (share config simply doesn't apply)

### Configuration

The following should be easily configurable (e.g. in a single config file or page-level constants):

- Couple names
- Event date/time (solar + lunar)
- Venue name and address
- Photo carousel image URLs
- WeChat share card: title, description, icon image URL
- WeChat JS-SDK appId and related config
- RSVP API endpoint URL

## Open Questions

1. **Which event details are correct?** The `wechat-article.html` says 5月2日 at 金都绿洲生态园, but the provided image says 5月4日 at 潍坊金庆大酒店5楼. Are these two different events, or should only one set of details be used? 5.2的，5.4的只是一个色彩说明。
2. **RSVP backend**: Should the RSVP form data be stored via a Vercel serverless function + database, or is a simple third-party form service preferred? Or just mock the submission for now? 用腾讯云的实现方式吧！6个月免费，够用了。
3. **Venue map**: Should the page include an embedded map (e.g. Tencent/Gaode map) or just a text address with a link to open in map app? 可以用腾讯地图吧。先定位山东
4. **Background music**: Should the page have optional background music (common in Chinese wedding invitations)? 暂时不用
5. **Animation**: Should there be entrance animations (fade-in, parallax) as the user scrolls, or keep it simple? 可以，但是不要过度，要显得高级！！

## Out of Scope

- Desktop-optimized layout (acceptable but not a focus)
- Multi-language support 仅仅中文
- Payment or gift registry features 不用
- Guest list management admin panel 这个可以配合表单吗？后续再高，先把前端搞好！！美观有设计感，不要有模型生成感，要看起来向人类的设计！。
