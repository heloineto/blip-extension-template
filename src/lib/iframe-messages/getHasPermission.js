import { IframeMessageProxy } from 'iframe-message-proxy';

const getHasPermission = async (permission, area) => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'hasPermissions',
            content: {
                permissionType: permission,
                customArea: area,
            },
        });

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getHasPermission;
