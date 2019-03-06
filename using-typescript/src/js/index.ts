import { GuestService } from './Guest'

const guestService = new GuestService()

console.table(guestService.getList())
