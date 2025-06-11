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

- Sau đấy hiển thị UI tên, loại, thông tin, nguyên liệu

