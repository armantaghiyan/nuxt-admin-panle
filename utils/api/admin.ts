import type BaseResponse from "~/utils/api/base";
import type Admin from "~/utils/models/Admin";

export interface AdminLoginResponse extends BaseResponse {

    data: {
        admin: Admin
        api_token: string
    }
}

export interface AdminStartResponse extends BaseResponse {

    data: {
        admin: Admin
    }
}

export interface AdminIndexResponse extends BaseResponse {

    data: {
        items: Admin[]
        count: number
    }
}

export interface AdminShowResponse extends BaseResponse {

    data: {
        item: Admin
    }
}

export interface AdminStoreAndUpdateResponse extends BaseResponse {

    data: {
        item: Admin
    }
}