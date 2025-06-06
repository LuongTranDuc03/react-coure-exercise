### 326. DarkTheme
    ThemeToggle.jsx
- Set up icon DarkTheme bằng icon có sãn của react { BsFillSunFill, BsFillMoonFill }

- Dùng toán tử 3 ngôi để chuyển sáng <-> tối

### 326. Add/Remove class

```js
//Tìm thẻ body
const body = document.querySelector('body')
//Nếu newDarkTheme là true thì thêm class, false thì bỏ class
body.classList.toggle('dark-theme', newDarkTheme)
```

- Bật/tắt thêm tối bằng cách thêm/bỏ class 'dark-theme' vào thẻ <body> 

### 328. CSS
- Trong index.css thêm class .dark-theme để chuyển đổi màu nền

### API
- Tạo API trên web unplash

- API KEY: 
yDcLfs5bR0fea9qvRA3tOwcW-t3Lh3fCoz_GYTAXvTI

- Tự thiết lập đường Link http bằng cách kết hợp với Thunder Client để kiểm tra 
Ví dụ: https://api.unsplash.com/search/photos?client_id=yDcLfs5bR0fea9qvRA3tOwcW-t3Lh3fCoz_GYTAXvTI&query=office

### 336.Render imgs
    Gallery.jsx
- Truy vấn để lấy dữ liệu từ API với key là 'images'

-Chia các trường hợp Loading, Error, và Fetch data

### 337. React Query Dev Tools

npm i @tanstack/react-query-devtools

- Chạy lệnh trên để cài đặt thêm tanstask

- Và thêm <ReactQueryDevtools initialIsOpen={true}/> trong main.jsx

### 338. Set Global SearchValue

- Nhớ lưu ý trong file context.jsx sau khi nhập const những object cần phải đưa vào mục value={}
để sử dụng cho toàn bộ source code cùng cấp

-Trong Galleryjsx cần phải có queryKey:['images', searchTerm], để có thể nhập dữ liệu từ user vào là searchTerm 

--------------------------------
Note để ý những lỗi như là : 

- Khi button phải để type="submit" chư không phải "button", submit mới có thể kích hoạt được lệnh handle

- và trong handle khi button phải cài đặt lại giá trị sau khi user nhập vào, bằng setSearchTerm
