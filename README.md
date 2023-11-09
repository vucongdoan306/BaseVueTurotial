# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


- Các bước để chạy code sau khi kéo code từ git về
-- 1: Chạy lên `npm i` - Lệnh này để node tìm các package (thư viên) đã được config trong file package.json và install chúng vào thư mục node_modules 
(Lưu ý: khi đẩy code lên git folder node_modules sẽ không được đẩy cùng)

-- 2: Sau khi lệnh `npm i` thực hiện xong tiếp tục gõ lệnh `npm run dev` 
-- 3: Sau khi lệnh chạy xong ctrl + click vào link hiện ra

!(Trong quá trình chạy lệnh npm i nếu phát sinh error thì nâng cấp nodejs và npm lên phiên bản mới nhất!)


- Bài 1: Two way binding (Truyền tham số 2 chiều)
-- 1.1: v-model, value
-- 1.2: created() , data(), methods, emits && $emit()
-- 1.3: scss
-- thêm: Kiến thức tách nhỏ component => tái sử dụng, dễ sửa đổi & bảo trì - Kiểu dư liệu UUID và GUID (là dữ liệu kiểu unique - không bao giờ trùng lặp)