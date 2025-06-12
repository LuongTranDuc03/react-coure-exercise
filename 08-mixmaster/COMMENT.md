### Làm việc với thư viện React Router Dom: trải nghiệm SPA ( Single Page Application )

### 367. Basic Router

- createBrowserRouter: Taoj caaus hinhf route dangj mangr (obj-based)

- RouterProvider: Bocj toanf booj App, nhaanj router vuwaf taoj

- Nếu muốn tách riêng component:
```js
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// ...
element: <HomePage />,
```

### 368. Setup Pages
- Tạo 'pages' cùng cấp với 'App.jsx' chứa các file jsx con bên trong

- Tạo file index.js để export tất cả các component ra mà không cần import lần lượt từng file (các component đã được export nếu không sẽ xảy ra lỗi)
```js
import { 
  Landing, 
  About, 
  Cocktail, 
  Error, 
  HomeLayout, 
  Newsletter 
} from './pages';
```

### 369. Link Component
```js
import { Link } from 'react-router-dom';

<Link to='/about'>About</Link>
```
- Tạo đường dẫn link tới component 

- Sự khác biệt với `<a href='...'>abc</a>` là: `<a>` sẽ load lại tất cả html,css,js còn `<Link />` chỉ load lại component mà nó chỉ tới thôi nên sẽ nhanh và mượt hơn

### 370. Nested Pages
- Điều hướng navbar bằng cách tạo children gói các đường link lại với nhau

### Giải thích `<Outlet />`
- Là component của React Router 
- Nó hiển thị các component con của route cha
- Dùng để hiển thị nested routes (route lồng nhau)

### 372. Navbar
- Tạo components folder trong assets chưa các file .jsx: `D:\react-course-v3-main\09-mixmaster\starter\src\components`

- `<Wrapper> </Wrapper>`: tạo ra nhằm lưu trữ thuộc tính css, sử dụng `import styled from 'styled-components'` trong file Navbar.js
- `<NavLink> </NavLink>` giống `<Link />` nhưng khác ở điểm là nó tự động thêm 'class' active khi URL hiện tại trùng với 'to', để tranh việc load component lại 1 lần nữa mà không có sự khác biệt gì cả.

- Sử dụng `NavLink` để tạo navbar cho project.

### Tạo components và lưu trữ file 

### 386. CocktailList
- Lấy dữ liệu từ 'drinks' trong file trình duyệt, dùng .map để trả về từng loại đồ uống

### 387. CocktailCard
- Trong file CocktailCard.jsx lấy từng thuộc tính của dữ liệu (destructure) đã context và return 
```js
<Link to={`/cocktail/${id}`}className='btn'>
    Details
  </Link>
```
- Trong đoạn trên hướng tới App.js và thay đổi đường dẫn bằng `cocktail/:id`

### 390. 391 Single Cocktail
- `Cocktail.jsx`

- Trong file trên đầu tiên truy cập vào url

- Tiếp theo lấy dữ liệu API bằng axios

- trong const loader dùng `queryClient.ensureQueryData` để load sẵn dữ liệu (id lấy từ url)
trả về { id } để cho component dùng

-  Lọc các nguyên liệu (strIngredient1, 2,...) thành 1 mảng validIngredients. Sử dụng keys, map

- Sau đấy hiển thị UI tên, loại, thông tin, nguyên liệu...

### 395. React Toastity 
`main.jsx`
- Dùng React.StrictMode để kiểm tra lỗi trong dev.

- ToastContainer: để hiển thị các toast thông báo ở trung tâm màn hình (top-center), tự đóng sau 2 giây (autoClose={2000}).

### 396. Newsletter
#### Tạo form đăng ký Newsletter, gửi dữ liệu lên server, hiển thị thông bá thành công hoặc thất bại rồi redirect về máy chủ
- Tổng quan: tạo Component Newsletter, tạo Hàm xử lý dữ liệu form action();
#### action(): 
- Chuyển formData thành object JS thông thường
- Gửi dữ liệu đến endpoint `https://www.course-api.com/cocktails-newsletter`
- Nếu thành công thì gửi thông báo rồi chuyển về trang chủ; nếu lỗi thì hiện lỗi từ server trả về 
#### Newsletter
```js
const isSubmitting = navigation.state === 'submitting';
```
- Dòng này kiểm tra xem form có đang được submit không → dùng để hiển thị chữ "submitting..." và disable nút.

```js
import { action as newsletterAction } from './pages/Newsletter';
```

- import vào App.jsx và đặt tên mới cho action là newsletterAction

### 402. SearchForm
- Tạo form tìm kiếm khi nhập vào một loại thức uống
- `Wrapper` là 1 styled-component wrapper để định dạng lại UI cho form 
- `Form` Đây là component form tích hợp sẵn trong react-router-dom v6.4+ — cho phép tự động gọi action khi submit.
- `useNavigation` Hook giúp kiểm tra trạng thái điều hướng, dùng để biết khi nào form đang submit
- Nếu `navigation.state === 'submitting'`, thì form đang trong quá trình gửi request.
- Khi đang submit, nút sẽ bị disabled + hiển thị "searching..." để người dùng biết đang xử lý.
Bình thường thì chỉ hiện "search"
- Gửi đến action xử lý, fetch data từ API, render lại page.

## Hiện tại đang có lỗi drinks không phải là mảng, điều này có lẽ là do trong dữ liệu API đang gặp lỗi chứ không phải là do nguồn code