import { IframeMessageProxy } from 'iframe-message-proxy';

const getHasPermission = async (
    permission: Permissions,
    area: PermissionAreas
) => {
    // TODO: Add a type for the response
    const response = await IframeMessageProxy.sendMessage({
        action: 'hasPermissions',
        content: {
            permissionType: permission,
            customArea: area,
        },
    });

    return response;
};

export default getHasPermission;
