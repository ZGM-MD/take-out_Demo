// import Vue from 'vue';
import { Button, MessageBox } from 'mint-ui';
import 'mint-ui/lib/style.css'
export default {
    install: function (Vue) {
        //mint ui 按需引入
        Vue.component(Button.name, Button)
        Vue.use(MessageBox.name, MessageBox)
    }
}

