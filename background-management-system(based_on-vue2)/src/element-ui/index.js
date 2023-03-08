import 'element-ui/lib/theme-chalk/index.css';
import { Select,Option,Container,Button,Dropdown,DropdownItem,
        DropdownMenu,Aside,Header,Main,Menu,Submenu,MenuItem,
        MenuItemGroup,Row,Card,Col,Table,TableColumn,Breadcrumb,
        BreadcrumbItem,Tag,Dialog,Form,FormItem,Input,DatePicker,
        Message,MessageBox,Pagination} from 'element-ui';


export default {
    install: function(Vue) {
        //element ui 按需引入
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(Container)
        Vue.use(Aside)
        Vue.use(Header)
        Vue.use(Main)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Button)
        Vue.use(Dropdown)
        Vue.use(DropdownItem)
        Vue.use(DropdownMenu)
        Vue.use(Row)
        Vue.use(Card)
        Vue.use(Col)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(Tag)
        Vue.use(Dialog)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)
        Vue.use(DatePicker)
        Vue.prototype.$confirm = MessageBox.confirm
        Vue.prototype.$message = Message
        Vue.use(Pagination)

    }
}

