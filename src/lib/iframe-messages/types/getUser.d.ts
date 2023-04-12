export interface GetUserResponse {
    response: Response;
    trackingProperties: { id: string };
}

interface Response {
    fullName: string;
    alternativeAccount: string;
    identity: string;
    email: string;
    phoneNumber: string;
    photoUri: string;
    timeZoneName: string;
    culture: string;
    extras: Extras;
    creationDate: string;
}

interface Extras {
    lastUsedTenants: string;
    cookies: string;
    acceptedPlugins: string;
}
