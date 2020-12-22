# imooc-datav-next-screen

## Project setup
```
npm install

npm run serve
```

## 存在的问题

1. Echarts5.0版本引入改变：
   变化为 `import * as Echarts from 'echarts'`
2. 使 Echarts5.0 版本中data 改变重绘
   需要 `chart.setOption(options, true)`
