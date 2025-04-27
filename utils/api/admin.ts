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