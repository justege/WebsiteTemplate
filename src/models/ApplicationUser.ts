export default class ApplicationUser {
    id = ''
    email = '';
    firstName = "";
    lastName = "";
    hasFetched = null;
    applicationRoleNames: string[] = [];

    constructor(init?: Partial<ApplicationUser>) {
        Object.assign(this, init);
    }

    clone(): ApplicationUser {
        return new ApplicationUser({
            ...this,
        });
    }
}