### Khởi tạo:
- Cài vite bản mới nhất: vào terminal nhập lệnh `npm install`, nếu muốn kiểm tra phiên bản của vite nhập lệnh: `npm list vite`
- Cài đặt tailwind.css bằng cách truy cập vào trang chủ của tailwind.com/docs để tìm lệnh cài đặt, hiện tại trong project này là lệnh: `npm install tailwindcss @tailwindcss/vite` (Bắt buộc phải cài vite bản tương ứng với tailwind nếu không sẽ không thể cài được)
- Tailwind theo hệ thống scale 4 (1 = 0.25rem)
### Thêm Extensions phục vụ cho code Tailwinđ
- Tailwind CSS IntelliSense
- Tailwind Fold

### 415. Navbar
- Tạo folder component và file con Narbar.jsx
- Trong các tag className ghi lại những lớp của tailwind.css
nav: nền màu xanh
h2: cỡ chữ 3xl, font in đậm
span: tô màu xanh cho "Dev"
- Import links để lấy dữ liệu từ file ./data, dùng map để lấy từng link (destructure) một rồi trả về key={id}, đường dẫn href={href}, và trả về giá trị hiện ra màn hình là {text}

### 416. Hero
- Import ảnh từ file ./hero.svg
- Trong thẻ `<h1>`: 
mt-4: margin-top = 1rem (khoảng cách phía trên đoạn text)
text-3xl: font-size lớn (~30px)
text-slate-700: màu chữ xám đậm trung bình (phù hợp nền sáng)
capitalize: viết hoa chữ cái đầu của mỗi từ
tracking-wide: tăng khoảng cách giữa cách kí tự một chút (dễ đọc, style hơn)

- Trong thẻ `<a>`:
h-8: Chiều cao = 2rem (≈ 32px)kích thước chiều cao của icon
w-8: Chiều rộng = 2rem (≈ 32px)kích thước chiều rộng của icon
text-slate-500: Màu chữ (icon) là xám trung bình                                
hover:text-black: Khi hover (di chuột vào), màu chuyển thành đen
duration-300: Thời gian hiệu ứng transition là 300ms (mượt mà trong 0.3 giây)

### Custom Class
- Ở đây chúng ta sẽ học cách tự custon một class riêng, giúp tiết kiệm thời gian, không gian, clean code
- Bằng cách xuất ra file index.css: 
```css
@layer components {
  .align-element {
    @apply mx-auto max-w-7xl px-8;
  }
}
```
- @layer components: Khai báo layer tùy chỉnh dành cho component styles trong tailwind (được ưu tiên sau base&utilities)
- .align-element: Class tự tạo để có thể tái sử dụng tron HTML
- @apply...: Dùng để áp dụng các utility classes của Tailwind vào class tùy chỉnh 

### 418. Skill section
- Trong file Skill.jsx thẻ `<div>`:
py-16: padding trên và dưới là 4rem.
grid: kích hoạt layout dạng Grid trong CSS.
gap-8: Tạo khoảng cách giữa các cột và hàng là 2rem (tức 32px).
md:grid-cols-2: Khi kích thước màn hình medium (≥768px), hiển thị 2 cột.
lg:grid-cols-3: Khi kích thước màn hình large (≥1024px), hiển thị 3 cột.

### 419. Section
- File About.jsx
w-full: chiều rộng 100% so với phần tử cha
h-64: chiều cao ứng với 16rem (~256px)

### 420. Projects Section
`Projects.jsx`
- Trong đây mình sẽ hiện ra tiêu đề của phần bằng cách import `<SectionTitle />`, trong mục sectionTitle đấy sẽ có prop là text ở đây được set up default.
- Sử dụng .map để lấy từng dữ liệu của project trong data.jsx. Từng project sẽ được thể hiện thông qua import `<ProjectsCard />` các props được truyền cố định bằng {...project}