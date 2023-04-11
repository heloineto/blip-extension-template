import { IframeMessageProxy } from 'iframe-message-proxy';
import type { GetHasPermissionResponse } from './types/getHasPermission';

type Permissions = 'write';
type PermissionAreas = 'team';

const getHasPermission = async (
    permission: Permissions,
    area: PermissionAreas
) => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'hasPermissions',
            content: {
                permissionType: permission,
                customArea: area,
            },
        })) as GetHasPermissionResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getHasPermission;
