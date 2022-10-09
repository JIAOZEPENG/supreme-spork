// 该文件专门管理路由
import VueRouter from 'vue-router'

//引入路由组件
import BasicSettings from '../pages/BasicSettings'
import Main from '../pages/Main'
import OrderList from '../pages/OrderList'
import AdminList from '../pages/AdminList'
import RevisePassword from '../pages/RevisePassword'
import OrderDetail from '../pages/OrderDetail'
import ProductList from '../pages/ProductList'
import EditProduct from '../pages/EditProduct'
import ProductCategory from '../pages/ProductCategory'
import AddCategory from '../pages/AddCategory'
import RecycleBin from '../pages/RecycleBin'
import UserList from '../pages/UserList'
import EditUser from '../pages/EditUser'
import Account from '../pages/Account'
import AccountDetails from '../pages/AccountDetails'
import AddUser from '../pages/AddUser'
import AddUserRank from '../pages/AddUserRank'
import UserRank from '../pages/UserRank'
import UserMessage from '../pages/UserMessage'
import ReplyMessage from '../pages/ReplyMessage'
import AdvertisingList from '../pages/AdvertisingList'
import Advertising from '../pages/Advertising'

//创建路由器
export default new VueRouter({
    routes: [{
            //重定向
            path: "/",
            redirect: "/Main"
        },
        {
            path: '/Main',
            component: Main
        },
        {
            path: '/OrderList',
            component: OrderList
        },
        {
            path: '/AdminList',
            component: AdminList
        },
        {
            path: '/RevisePassword',
            component: RevisePassword
        },
        {
            path: '/OrderDetail',
            component: OrderDetail
        },
        {
            path: '/ProductList',
            component: ProductList
        },
        {
            path: '/EditProduct',
            component: EditProduct
        },
        {
            path: '/ProductCategory',
            component: ProductCategory
        },
        {
            path: '/AddCategory',
            component: AddCategory
        },
        {
            path: '/RecycleBin',
            component: RecycleBin
        },
        {
            path: '/UserList',
            component: UserList
        },
        {
            path: '/EditUser',
            component: EditUser
        },
        {
            path: '/Account',
            component: Account
        },
        {
            path: '/AccountDetails',
            component: AccountDetails
        },
        {
            path: '/AddUser',
            component: AddUser
        },
        {
            path: '/AddUserRank',
            component: AddUserRank
        },
        {
            path: '/UserRank',
            component: UserRank
        },
        {
            path: '/UserMessage',
            component: UserMessage
        },
        {
            path: '/ReplyMessage',
            component: ReplyMessage
        },
        {
            path: '/BasicSettings',
            component: BasicSettings
        },
        {
            path: '/AdvertisingList',
            component: AdvertisingList
        },
        {
            path: '/Advertising',
            component: Advertising
        }

    ]
})