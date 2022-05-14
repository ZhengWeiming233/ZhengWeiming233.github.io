// 服务相关配置
const CONFIG_SERVICE = {
  loginBaseUrl: 'http://1.15.23.25/api',
  baseUrl: 'http://1.15.23.25:8080/api',
  tempToken: '',
  // 登录获取token的用户名和密码
  login: {
    username: 'admin',
    password: 'admin123'
  }

}

// 参数设定的配置
const CONFIG = {
  // 是否去除返回标段名称中的空格
  isTrimSectionNameTrim: true,
  // bim图层名称
  bimLayers: [
    '右侧路基___总_2@组装',
    '广汕公路跨线桥_1_1@广汕公路跨线桥',
    '东江大桥水面@东江大桥水面',
    '软土路基@组装',
    '左侧路基总@组装',
    '东江大桥@组装',
    '削坡@组装',
    '挡墙着色@组装',
    'CSD路基__广汕公路跨线桥测试_1_1@广汕公路跨线桥-左',
    '台背回填@组装',
    '右侧测试路基__1@广汕公路跨线桥-右',
    '挖台阶@组装'
  ],
  // 倾斜图层名称
  tiltLayers: ['Combine']
}
