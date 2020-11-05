export default function install (Vue) {
    Vue.mixin({
        beforeCreate () {
            if(!window.creitveActualVueAndInstance)
                window.creitveActualVueAndInstance = { instance: this, vue: Vue };
            }
    });
}   