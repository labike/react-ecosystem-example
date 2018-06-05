/*
* @Author: Labike
* @Date:   2018-06-01 23:07:01
* @Last Modified by:   Labike
* @Last Modified time: 2018-06-01 23:13:41
*/

import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(function(config){
    Toast.loading('加载中...', 0)
    return config
})

axios.interceptors.request.use(function(config){
	setTimeout(() => {
		Toast.hide()
	}, 3000)
    
    return config
})