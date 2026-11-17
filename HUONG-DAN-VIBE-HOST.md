# BẢN TEST VIBE HOST — KHÔNG DÙNG LÀM WEBSITE CHÍNH THỨC

Bản sao độc lập từ D:\SW\03-SOURCE-UP-GITHUB\SW ngày 17/11/2026.
Không đổi DNS tên miền hanhtrinhphuongnam.vn sang bản này.

## Upload

1. Tải file `vibe-host-test.zip` lên Vibe Host bằng chức năng triển khai ZIP.
2. Trong ZIP, package.json và Dockerfile nằm ngay gốc. Không chọn kiểu website HTML tĩnh / SPA.
3. Nếu nền tảng cho chọn Dockerfile, dùng Dockerfile có sẵn; cổng ứng dụng 3000.
4. Nếu dùng Node.js tự nhận diện: Node 24.21.0, cài `npm ci`, build `npm run build`, chạy `npm start`, HOST=0.0.0.0 và PORT theo cổng của Vibe Host (mặc định 3000).
5. Dùng địa chỉ thử nghiệm Vibe Host cấp. Không cần database hoặc API key.
6. Gửi lại địa chỉ thử nghiệm để kiểm tra. Nếu triển khai lỗi, gửi log build/runtime.

## Bảo vệ SEO của website chính

Cấu hình build khóa SITE_INDEXABLE=false và canonical về https://hanhtrinhphuongnam.vn.
Header X-Robots-Tag: noindex, follow được cấu hình cho bản thử.
Không đổi tên miền chính, không sửa Search Console, không gửi sitemap bản thử.
Không thể bật index chỉ bằng thay biến môi trường: cần chuẩn bị bản production riêng sau khi kiểm tra.

## Phạm vi kiểm tra

- Trang chủ, menu mobile, hotline/Zalo, bảng giá, bộ lọc xe.
- Mở trực tiếp và tải lại trang chi tiết xe, bài viết, tuyến thuê xe.
- Server-rendered HTML, title/description, canonical, schema, favicon.
- /robots.txt, /sitemap.xml, API /api/vehicles?seats=7.
- URL sai trả 404, URL cũ chuyển hướng, header noindex.
- Hình ảnh, font, cache, độ trễ và lỗi runtime trên Vibe Host.

Kiểm tra tự động sau khi deploy (PowerShell, tại thư mục này):

    $env:CHECK_URL='https://DIA-CHI-THU-NGHIEM'
    $env:CHECK_CANONICAL_ORIGIN='https://hanhtrinhphuongnam.vn'
    $env:CHECK_INDEXABLE='false'
    npm run check:site

Bản này giữ nội dung, URL và logo của source chính. Chỉ đổi cấu hình build/start sang Nitro Node server, thêm Dockerfile và header/cache cho hosting mới. Không chứa .git, bí mật .env hoặc các bản build Netlify/Cloudflare.
