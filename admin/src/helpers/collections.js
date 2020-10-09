import cookieType from "@/config/cookieType";
import Vue from 'vue'

// The default menu icon array. If no icon is configured for the menu, a random icon configuration will be set from the array.
export const sideIcons = (max) => {
    return ['dashboard', 'user', 'form', 'setting', 'message', 'safety', 'bell', 'delete', 'code-o', 'poweroff', 'eye-o', 'hourglass']
};

export const removeCookie = () => {
    Object.keys(cookieType).map((x) => {
        Vue.cookie.delete(cookieType[x])
    })
    return "Done";
};