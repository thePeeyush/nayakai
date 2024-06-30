import {auth} from '../auth'
export async function checkAuth() {
    const session = await auth();
    if (!session) {
        redirect(`${getUrl()}/api/auth/signin`);
    }
    return session.user
}