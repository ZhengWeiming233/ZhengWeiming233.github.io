const CONFIG_3D_MAP = {
  animation: false, //是否创建动画小器件，左下角仪表
  timeline: false, //是否显示时间线控件
  fullscreenButton: false, //右下角全屏按钮
  baseLayerPicker: false, //底图选择
  vrButton: false, //右下角vr虚拟现实按钮

  openFlyAnimation: true,
  contextmenu: true,
  geocoder: false, //是否显示地名查找控件
  sceneModePicker: false, //是否显示投影方式控件
  homeButton: false, //回到默认视域按钮
  navigationHelpButton: false, //是否显示帮助信息控件
  navigationInstructionsInitiallyVisible: false, //在用户明确单击按钮之前是否自动显示

  infoBox: false, //是否显示点击要素之后显示的信息
  selectionIndicator: false, //选择模型是是否显示绿色框,
  shouldAnimate: true, //是否显示动画控件
  showRenderLoopErrors: true, //是否显示错误弹窗信息
  center: {
    y: 30.38942,
    x: 109.249014,
    z: 2252.11,
    heading: 284.2,
    pitch: -8.6,
    roll: 359.8
  },
  location: {
    //底部栏信息是否显示，显示内容
    fps: true,
    format:
      "<div>经度:{x}</div> <div>纬度:{y}</div> <div>海拔：{z}米</div> <div>方向：{heading}度</div> <div>视高：{height}米</div>"
  },
  navigation: {
    //是否加导航球
    compass: { top: "10px", right: "5px" } //导航球添加位置
  },
  terrain: {
    //地形是否显示
    url: "https://data.marsgis.cn/terrain", //也可以换成自定义的地形切片服务
    visible: true
  },
  basemaps: [
    //底图加载选择，注意 在线服务偶尔会访问不到
    {
      name: "谷歌卫星",
      icon: "img/basemaps/google_img.png",
      type: "group",
      layers: [
        {
          name: "底图-补南北极空洞",
          type: "xyz",
          url: "http://data.marsgis.cn/maptile/google_earth/{z}/{x}/{y}.jpg",
          crs: "4326",
          minimumLevel: 0,
          maximumLevel: 3
        },
        {
          name: "谷歌卫星",
          type: "www_google",
          layer: "img_d",
          crs: "wgs84"
        }
      ],
      visible: false //默认为false,如果改成true,则底图加载当前图源服务
    },
    {
      name: "ArcGIS卫星",
      icon: "img/basemaps/esriWorldImagery.png",
      type: "arcgis",
      url:
        "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      enablePickFeatures: false,
      visible: true
    },
    {
      name: "微软卫星",
      icon: "img/basemaps/bingAerial.png",
      type: "www_bing",
      key: "AuKhM0WRkjhX8E4y1OM0TukYycaw_4Vh3eSfXONDf7OARls-WEB3K_Rfx89bWxof",
      layer: "Aerial",
      visible: false
    },
    {
      name: "天地图卫星",
      icon: "img/basemaps/tdt_img.png",
      type: "www_tdt",
      layer: "img_d",
      key: ["9ae78c51a0a28f06444d541148496e36"],
      visible: false
    },
    {
      name: "天地图电子",
      icon: "img/basemaps/tdt_vec.png",
      type: "group",
      layers: [
        {
          name: "底图",
          type: "www_tdt",
          layer: "vec_d",
          key: ["9ae78c51a0a28f06444d541148496e36"]
        },
        {
          name: "注记",
          type: "www_tdt",
          layer: "vec_z",
          key: ["9ae78c51a0a28f06444d541148496e36"]
        }
      ],
      visible: false
    },
    {
      name: "OSM地图",
      type: "xyz",
      icon: "img/basemaps/osm.png",
      url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      subdomains: "abc",
      visible: false
    },
    {
      name: "黑色底图",
      icon: "img/basemaps/bd-c-dark.png",
      type: "mapboxstyle",
      username: "marsgis",
      styleId: "cki0a2mtc2vyo1bqu76p8ks8m",
      scaleFactor: true,
      visible: false
    },
    {
      name: "灰色底图",
      icon: "img/basemaps/bd-c-grayscale.png",
      type: "mapboxstyle",
      username: "marsgis",
      styleId: "cki0a92b123qo1aluk0e5v7sb",
      scaleFactor: true,
      visible: false
    },

    {
      name: "蓝色底图(GCJ02偏移)",
      icon: "img/basemaps/bd-c-midnight.png",
      crs: "gcj",
      type: "arcgis",
      url:
        "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
      enablePickFeatures: false,
      visible: false
    },

    {
      name: "谷歌卫星(GCJ02偏移)",
      type: "group",
      crs: "gcj",
      icon: "img/basemaps/google_img.png",
      layers: [
        {
          name: "底图",
          type: "www_google",
          layer: "img_d",
          crs: "gcj"
        },
        {
          name: "注记",
          type: "www_google",
          layer: "img_z",
          crs: "gcj"
        }
      ],
      visible: false
    },
    {
      name: "单张图片",
      icon: "img/basemaps/blackMarble.png",
      type: "image",
      url: "img/world/BlackMarble.jpg",
      visible: false
    }
  ]
};
