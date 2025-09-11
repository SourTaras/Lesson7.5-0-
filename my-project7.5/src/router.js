import { createRouter, createWebHistory } from 'vue-router';
import AdminDashBoard from './pages/AdminDashBoard.vue'
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import ProfilePage from './pages/ProfilePage.vue';
import LoginPage from './pages/LoginPage.vue'

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
{ path: 'login', component: LoginPage},
{ path: 'profile', component: ProfilePage}
],
},
];

const router = createRouter({
history: createWebHistory('/Lesson7.5-0-/'), // Вказуємо базовий шлях для GitHub Pages
routes,
});

export default router;