import { defineStore } from "pinia";
import { STORE_USER_INFO } from "@/stores/constant";
import { ElMessage } from "element-plus";
import type { UserInfo } from "./interface";
import { type AxiosResponse } from "axios";
import * as loginApi from "@/api/login";
import * as authApi from "@/api/auth";
import router from "@/router";
import { fullUrl } from "@/utils";
import { GenderEnum } from "@/api/modules/enums/gender-enum";
import manAvatar from "@/assets/images/manAvatar.png";
import womanAvatar from "@/assets/images/womanAvatar.png";

export const useUserInfo = defineStore("userInfo", {
    state: (): UserInfo => {
        return {
            // Token
            token: "",
            // Refresh Token
            refreshToken: "",
            tenantId: null,
            tenantNo: null,
            userId: null,
            account: null,
            jobNumber: null,
            userName: null,
            nickName: null,
            avatar: null,
            birthday: null,
            sex: null,
            email: null,
            mobile: null,
            tel: null,
            departmentId: null,
            departmentName: null,
            isSuperAdmin: null,
            isSystemAdmin: null,
            lastLoginDevice: null,
            lastLoginOS: null,
            lastLoginBrowser: null,
            lastLoginProvince: null,
            lastLoginCity: null,
            lastLoginIp: null,
            lastLoginTime: null,
            appEnvironment: null,
            appOrigin: null,
            roleNameList: null,
            buttonCodeList: null,
            moduleList: null,
            menuList: null,
        };
    },
    actions: {
        /**
         * 设置用户信息
         * @param userInfo
         */
        setUserInfo(userInfo: UserInfo): void {
            this.$state = { ...this.$state, ...userInfo };
        },
        /**
         * 删除 Token
         */
        removeToken(): void {
            this.token = "";
            this.refreshToken = "";
        },
        /**
         * 设置 Token
         * @param axiosResponse
         */
        setToken(axiosResponse: AxiosResponse): void {
            // 从请求头部中获取 Token
            const token = axiosResponse.headers["access-token"];
            // 从请求头部中获取 Refresh Token
            const refreshToken = axiosResponse.headers["x-access-token"];
            // 判断是否为无效 Token
            if (token === "invalid_token") {
                // 删除 Token
                this.removeToken();
            } else if (token && refreshToken && refreshToken !== "invalid_token") {
                // 设置 Token
                this.token = token;
                this.refreshToken = refreshToken;
            }
        },
        /**
         * 获取 Token
         * @description 从缓存中获取
         * @returns
         */
        getToken(): { token: string | null; refreshToken: string | null } {
            return { token: this.token, refreshToken: this.refreshToken };
        },
        /**
         * 解析Token
         * @description 如果Token过期，会解析不出来
         * @param token 可以传入，也可以直接获取 pinia 中的
         * @param refreshToken 可以传入，也可以直接获取 pinia 中的
         * @returns
         */
        resolveToken(
            token: string | null = null,
            refreshToken: string | null = null
        ): { token: string | null; refreshToken: string | null; tokenData: anyObj | null } {
            token ??= this.token;
            refreshToken ??= this.refreshToken;
            if (token) {
                // 解析 JwtToken
                const jwtToken = JSON.parse(
                    decodeURIComponent(encodeURIComponent(window.atob(token.replace(/_/g, "/").replace(/-/g, "+").split(".")[1])))
                ) as anyObj;
                // 获取 Token 的过期时间
                var exp = new Date(jwtToken.exp * 1000);
                if (new Date() >= exp) {
                    return { token: `Bearer ${token}`, refreshToken: `Bearer ${refreshToken}`, tokenData: jwtToken };
                }
                return { token: `Bearer ${token}`, refreshToken: null, tokenData: jwtToken };
            }
            return { token: null, refreshToken: null, tokenData: null };
        },
        /**
         * 获取头像
         * @returns
         */
        getAvatar() {
            if (this.avatar) {
                return fullUrl(this.avatar);
            } else {
                switch (this.sex) {
                    case GenderEnum.Unknown:
                    case GenderEnum.Man:
                        return manAvatar;
                    case GenderEnum.Woman:
                        return womanAvatar;
                }
            }
        },
        /**
         * 刷新用户信息
         */
        async refreshUserInfo() {
            const userInfo = await authApi.getLoginUserInfo();
            if (userInfo.success) {
                this.$state = { ...this.$state, ...userInfo.data };
            } else {
                throw new Error(userInfo.message);
            }
        },
        /**
         * 登录
         */
        login(): void {
            ElMessage.success("登录成功");
            // 进入系统
            router.push({ path: "/" });
        },
        /**
         * 退出登录
         */
        logout(): void {
            this.removeToken();
            // 调用退出登录的接口
            loginApi.logout().finally(() => {
                // next({ path: "/login", query: })
                router.push({ path: "/login", query: { redirect: encodeURIComponent(router.currentRoute.value.fullPath) } });
            });
        },
    },
    persist: {
        key: STORE_USER_INFO,
    },
});
