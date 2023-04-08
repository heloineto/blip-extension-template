type EventAction =
    | 'sendCommand'
    | 'startLoading'
    | 'stopLoading'
    | 'heightChange'
    | 'stateChangeSuccess'
    | 'showModal'
    | 'hideNavbar'
    | 'showNavbar'
    | 'getCurrentLanguage'
    | 'toast'
    | 'getApplication'
    | 'hasPermissions'
    | 'getPermissionsObject'
    | 'segment';

interface RequestGetApplication {
    action: 'getApplication';
    content: string | null;
}

interface RequestSendCommand {
    action: 'sendCommand';
    content: {
        destination: 'BlipService' | 'MessagingHubService';
        command: {
            method: 'get' | 'set' | 'delete' | 'observe' | 'subscribe';
            to: string;
            uri: string;
        };
    };
}

interface RequestGetApplication {
    action: 'getApplication';
    content: string | null;
}

type Permissions = 'write';
type PermissionAreas = 'team';
interface RequestHasPermission {
    action: 'hasPermissions';
    content: {
        permissionType: Permissions;
        customArea: PermissionAreas;
    };
}

interface Message {
    action: EventAction;
    content?: unknown;
    caller?: string;
    fireAndForget?: boolean;
}

interface TrackingProperties {
    id: string;
}

interface Options {
    prefix?: string;
    caller?: string;
    receiveWindow?: Window;
    targetWindow?: Window;
    shouldHandleMessage?: (message: {
        message: Message;
        trackingProperties: TrackingProperties;
    }) => boolean;
}

interface IframeMessageProxyType {
    config: (options?: Options) => IframeMessageProxyType;
    listen: () => void;
    stopListen: () => void;
    sendMessage: (payload: MessagePayload) => Promise<unknown>;
}

declare module 'iframe-message-proxy' {
    export const IframeMessageProxy: IframeMessageProxyType;
}