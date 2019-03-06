import { guestData as data } from '../assets/guest-data'
import { Guest } from './guest.model'

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
    const guest: Guest = {
      id: item.id,
      name: `${item.firstName} ${item.lastName}`,
      email: item.email,
      gender: item.gender
    }
    return guest
  }
}
