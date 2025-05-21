import type BaseResponse from "~/utils/api/base";
import type Permission from "~/utils/models/Permission";
import type Role from "~/utils/models/Role";


export interface AccessShowResponse extends BaseResponse {

    data: {
        permissions: Permission[]
    }
}

export interface AccessIndexResponse extends BaseResponse {

    data: {
        items: Role[]
    }
}

export interface AccessStoreAndUpdateResponse extends BaseResponse {

    data: {
        item: Role
    }
}

export interface AccessRoleShowResponse extends BaseResponse {

    data: {
        item: Role
    }
}