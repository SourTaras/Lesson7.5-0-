import { createRouter, createWebHistory } from 'vue-router';
import AdminDashBoard from './pages/AdminDashBoard.vue'
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';

const routes = [
{
path: '/',
component: AdminDashBoard, // Використовуємо AdminDashboard як головний компонент
children: [
{ path: '', component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
{ path: 'reviews', component: ManageReviews }, // Відгуки
],
},
{
path: '/admin',
component: AdminDashBoard,
children: [
{ path: 'products', component: ManageProducts },
{ path: 'reviews', component: ManageReviews },
],
},
];

const router = createRouter({
history: createWebHistory('/my-shop/'), // Вказуємо базовий шлях для GitHub Pages
routes,
});

export default router;