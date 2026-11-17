# SWT — Bản thử Vibe Host

Bộ source thử độc lập từ website Hành Trình Phương Nam. Bản này khóa noindex; không trỏ tên miền chính vào đây.

## Deploy từ GitHub

- Repository: https://github.com/gialaccr7-svg/SWT
- Branch: main
- Root directory: để trống (package.json và Dockerfile ở gốc).
- Nếu chọn được Dockerfile: dùng Dockerfile trong repo; cổng 3000.
- Nếu triển khai Node.js tự nhận diện: Node 24.21.0; install `npm ci`; build `npm run build`; start `npm start`; HOST=0.0.0.0 và PORT theo cổng nền tảng.
- Cần cài cả devDependencies ở bước build. Không đặt NPM_CONFIG_PRODUCTION=true hoặc bỏ devDependencies khi build.
- Đây là ứng dụng SSR có API, không chọn chế độ HTML tĩnh/SPA hoặc chỉ publish thư mục dist.
- Không cần database hay API key. Dùng tên miền thử nghiệm Vibe Host cấp.

## Kiểm tra

Bản Node đã build, typecheck và vượt kiểm tra 58 trang sitemap, metadata, API, ảnh/cache, chuyển hướng, 404 và noindex trên localhost. Chưa xác minh triển khai Vibe Host hoặc Docker Linux.

Xem [kết quả kiểm tra](KET-QUA-KIEM-TRA.md) và [hướng dẫn chi tiết](HUONG-DAN-VIBE-HOST.md).
