### Khởi tạo
- npm install, npm start

- npm install @reduxjs/toolkit react-redux

### 425. Store
index.js
#### Import
- React và ReactDOM: core thư viện React.

- index.css: file CSS gốc để reset hoặc thêm style toàn cục.

- App: component chính của app.

- store: Redux store đã config (chứa state toàn cục).

- Provider: HOC (Higher Order Component) để inject Redux store vào toàn bộ app.

#### ReactDOM.render(...)
- ReactDOM.render(...): gắn React App vào thẻ `<div id="root"></div>` trong file index.html.

- React.StrictMode: giúp phát hiện các lỗi tiềm ẩn (chỉ chạy ở dev mode).

- Provider store={store}: cho phép mọi component bên trong App có thể truy cập state từ Redux.

### 426.First Slice
- Taoj folder features, taoj file cartSlice.js
- Trong store.js: configureStore là cách mới để tạo store (thay vì createStore cũ).

Nó tự cấu hình redux-thunk, devtools, và combine reducers.
- store: nơi lưu toàn bộ Redux state.

reducer: là một object tổng hợp (combine) nhiều reducer.

cart: sẽ quản lý state dưới nhánh state.cart

modal: sẽ quản lý dưới state.modal

### 427. Redux
- Trong store chrome cài Redux devtool

### 428. useSelector
Navbar.js
- useSelector là một hook của Redux Toolkit (có trong react-redux) cho phép component truy cập vào state trong Redux store.

- store chính là toàn bộ Redux state tree.

- store.cart là slice (phần) của state được đặt tên là "cart" (vì đã khai báo trong configureStore).

- { amount } là destructuring để lấy ra giá trị amount trong cart.

### 430. CartItems Data
- Import cartItems từ cartItems.js
- Nhập vào cartItems: cartItems 

### 431. Cart container
- Thiết lập tiêu đề cho Cart Container
- Trả về từng card bằng cách lấy dữ liệu đã được import từ cartItems
- Nếu như lượng cart < 1 thì trả về là 'rỗng'

### 432. Cart Item
CartItem.js
- Destructure để đặt các props

### 434. Reducers
Trong cartSlice.js sử dụng reducers của Redux Toolkit
- clearCart: Xóa hết sản phẩm trong giỏ hàng; gán cartItems thành mảng rỗng
- removeItem: Xóa một sản phẩm khỏi giỏ hàng; lấy id từ action.payload, dùng filter() để loại bỏ id trung khớp
- increase: Tăng số lượng của sản phẩm lên 1; tìm sản phẩm có payload.id
-calculate: Tính tổng số lượng sản phẩm và tổng tiền; lawppj qua cartItems, tính tổng amount và tổng price*amount, cập nhật lại state.amount và state.total

### 435. Modal
- `const dispatch = useDispatch();`: Gửi dispatch các action đến Redux store; tại đây ta sẽ gửi 2 loại là clearCart() và closeCart()
- Khi mà click vào nút 'confirm' thì ta sẽ Vừa xóa toàn bộ giỏ hàng và ẩn popup xác nhận.
- Nút 'cancel': Chỉ gọi closeModal() → đóng popup mà không thay đổi gì trong giỏ hàng.

### 436. createAsyncThunk
cartSlice.js
- `extraReducers: (builder) => { ... }`: dùng để cử lý các action types không được tạo trực tiếp bởi slice; nó gồm 3 loại action khác nhau như .pending (đang chờ), .fulfilled (hoàn thành thahf công), .rejected (thất bại)
