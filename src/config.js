import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(function(config){
    Toast.loading('正在加载中...', 0)
    return config
})

axios.interceptors.response.use(function(config){
    setTimeout(() => {
        Toast.hide()
    }, 3000)
    
    return config
})