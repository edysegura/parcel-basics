import { GuestService } from './guest.service'

const guestService = new GuestService()
console.table(guestService.getList())
