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
- useSelector là một hook của Redux Toolkit (có trong react-redux) cho phép component truy cập vào state trong Redux store.
- store chính là toàn bộ Redux state tree.

- store.cart là slice (phần) của state được đặt tên là "cart" (do anh đã khai báo trong configureStore).

- { amount } là destructuring để lấy ra giá trị amount trong cart.