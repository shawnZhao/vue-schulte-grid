// 导入组件，组件必须声明 name
import SchulteGrid from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
SchulteGrid.install = function (Vue) {
  Vue.component(SchulteGrid.name, SchulteGrid)
}

// 导出组件
export default SchulteGrid
