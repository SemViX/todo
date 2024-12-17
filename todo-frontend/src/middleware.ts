import { ROUTES } from './utils/routes'

export {default} from 'next-auth/middleware'

export const config = {matcher: ['/tasks', '/completed', '/statistics']}