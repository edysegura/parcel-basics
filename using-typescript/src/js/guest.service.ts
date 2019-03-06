import { guestData as data } from '../assets/guest-data'
import { Guest } from './guest.model';

export class GuestService {
  list: Guest[]

  constructor() {
    this.loadData()
  }

  getList(): Guest[] {
    return this.list
  }

  private loadData() {
    this.list = data.map(this.mapToGuest)
  }

  private mapToGuest(item: any): Guest {
    let guest: any = {}
    guest.id = item.id
    guest.name = `${item.firstName} ${item.lastName}`
    guest.email = item.email
    guest.genre = item.gender
    return guest
  }
}
