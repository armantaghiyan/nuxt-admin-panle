import {Permissions} from "~/utils/models/enums";

export const usePermission = () => {

    const $user = userStore();

    function hasPermission(permission: Permissions) {
        return $user.adminPermissions.find(item => item.name === permission);
    }

    return {hasPermission};
}