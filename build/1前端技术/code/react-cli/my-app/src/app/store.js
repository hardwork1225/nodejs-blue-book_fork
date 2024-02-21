// 整个应用只有一个store对象
// 引入 configureStore，创建store对象
import { configureStore } from '@reduxjs/toolkit';
// 引入 Couter 组件服务的 reducer
import counterReducer from '../components/Couter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
