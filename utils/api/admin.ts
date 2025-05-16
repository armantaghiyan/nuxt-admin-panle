import type BaseResponse from "~/utils/api/base";
import type Admin from "~/utils/models/Admin";
import type Role from "~/utils/models/Role";
import type Permission from "~/utils/models/Permission";

export interface AdminLoginResponse extends BaseResponse {

    data: {
        admin: Admin
        api_token: string
    }
}

export interface AdminStartResponse extends BaseResponse {

    data: {
        admin: Admin,
        permissions: Permission[] | null,
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
        admin_roles: Role[]
        roles: Role[]
    }
}

export interface AdminStoreAndUpdateResponse extends BaseResponse {

    data: {
        item: Admin
    }
}