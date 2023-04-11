export interface GetApplicationResponse {
    response: Response;
    trackingProperties: { id: string };
}

interface Response {
    shortName: string;
    name: string;
    description: string;
    accessKey: string;
    imageUri: string;
    template: string;
    tenantId: string;
    created: string;
    updated: string;
    hasPermission: boolean;
    emailOwner: string;
    applicationUserPermissionModel: ApplicationUserPermissionModel[];
    applicationDomainActivations: unknown[];
    channels: unknown[];
    applicationJson: Record<string, unknown>;
}

interface ApplicationUserPermissionModel {
    permissionClaim: number;
    permissionAction: number;
}
