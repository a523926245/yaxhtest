import Vue from 'vue'
import Cell from "./components/cell/cell.vue";
const Components = {
    Cell,
}
let MyPlugin = {
	version: '1.0.0'
};

MyPlugin.install = function(Vue) {
	if (this.installed) return;
	Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	MyPlugin.install(window.Vue);
}

Vue.use(MyPlugin)

export default MyPlugin