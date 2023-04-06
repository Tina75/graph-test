import { createRouter, createWebHashHistory } from "vue-router";
// import VisRewrite from '../page/VisRewrite.vue'
// import Vis from "../page/Vis.vue";
import G6Demo from "../page/g6demo/index.vue";
// import Test from "../page/test";

const routes = [
    // { path: '/vis', component: Vis },
    // { path: '/visRewrite', component: VisRewrite },
    { path: '/g6demo', component: G6Demo },
    // { path: '/test', component: Test },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router