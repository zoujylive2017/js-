1、js，css的路径不对 
方法：找到 config/index.js，将其中的assetsPublicPath值改为’./’

assetsPublicPath:'./'

2、css中引用的图片资源找不到 
方法：找到 build/utils.js，增加一行代码即可：

publicPath:"../../"
--------------------- 
