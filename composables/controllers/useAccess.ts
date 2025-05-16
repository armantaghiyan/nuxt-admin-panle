import {showLoading} from "~/utils/helper";
import type BaseResponse from "~/utils/api/base";
import type Permission from "~/utils/models/Permission";
import type {AccessIndexResponse, AccessShowResponse} from "~/utils/api/access";
import type Admin from "~/utils/models/Admin";
import type Role from "~/utils/models/Role";

export default function useAccess() {
    const {callApi} = useCallApi();
    const $user = userStore();
    //==================================================================================================================
    function toggleAccess(roleId: number, callback?: () => void) {
        showLoading();
        callApi.post<BaseResponse>('access/role-toggle', {
            role_id: roleId,
            admin_id: $user.user.id,
        }).then(res => {
            callback?.();
        });
    }
    //==================================================================================================================
    function togglePermission(permissionId: number, roleId: number,callback?: () => void) {
        showLoading();
        callApi.post<BaseResponse>('access/permission-toggle', {
            permission_id: permissionId,
            role_id: roleId,
        }).then(res => {
            callback?.();
        });
    }
    //==================================================================================================================
    const rolePermissions = ref<Permission[]>([]);
    const rolePermissionLoaded = ref(false);

    function show(id: string | number) {
        showLoading();
        callApi.get<AccessShowResponse>(`/access/${id}`).then(res => {
            rolePermissions.value = res.data.data.permissions;
            rolePermissionLoaded.value = true;
        });
    }
    //==================================================================================================================

    const items = ref<Role[]>([]);
    function fetchData() {
        showLoading();
        callApi.get<AccessIndexResponse>('/access').then(res => {
            items.value = res.data.data.items
        });
    }

    return {
        fetchData,
        items,

        toggleAccess,
        show,
        rolePermissions,
        rolePermissionLoaded,

        togglePermission,
    }
}