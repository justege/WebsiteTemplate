export default class ApplicationUser {

    id = ''
    
    email = '';

    applicationRoleNames: string[] = []

    constructor(init?: Partial<ApplicationUser>) {
        Object.assign(this, init)
    }

    clone(): ApplicationUser {
        return new ApplicationUser({
            ...this,
        });
    }

    
}