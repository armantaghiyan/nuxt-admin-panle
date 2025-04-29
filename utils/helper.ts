import {appStore} from "~/stores/app";

export function showLoading(){
    appStore().showLoading();
}