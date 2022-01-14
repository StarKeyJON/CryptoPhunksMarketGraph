import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  PhunkBidEntered as PhunkBidEnteredEvent,
  PhunkBidWithdrawn as PhunkBidWithdrawnEvent,
  PhunkBought as PhunkBoughtEvent,
  PhunkNoLongerForSale as PhunkNoLongerForSaleEvent,
  PhunkOffered as PhunkOfferedEvent,
  Unpaused as UnpausedEvent
} from "../generated/CryptoPhunksMarket/CryptoPhunksMarket"
import {
  OwnershipTransferred,
  Paused,
  PhunkBidEntered,
  PhunkBidWithdrawn,
  PhunkBought,
  PhunkNoLongerForSale,
  PhunkOffered,
  Unpaused
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handlePhunkBidEntered(event: PhunkBidEnteredEvent): void {
  let entity = new PhunkBidEntered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.phunkIndex = event.params.phunkIndex
  entity.value = event.params.value
  entity.fromAddress = event.params.fromAddress
  entity.save()
}

export function handlePhunkBidWithdrawn(event: PhunkBidWithdrawnEvent): void {
  let entity = new PhunkBidWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.phunkIndex = event.params.phunkIndex
  entity.value = event.params.value
  entity.fromAddress = event.params.fromAddress
  entity.save()
}

export function handlePhunkBought(event: PhunkBoughtEvent): void {
  let entity = new PhunkBought(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.phunkIndex = event.params.phunkIndex
  entity.value = event.params.value
  entity.fromAddress = event.params.fromAddress
  entity.toAddress = event.params.toAddress
  entity.save()
}

export function handlePhunkNoLongerForSale(
  event: PhunkNoLongerForSaleEvent
): void {
  let entity = new PhunkNoLongerForSale(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.phunkIndex = event.params.phunkIndex
  entity.save()
}

export function handlePhunkOffered(event: PhunkOfferedEvent): void {
  let entity = new PhunkOffered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.phunkIndex = event.params.phunkIndex
  entity.minValue = event.params.minValue
  entity.toAddress = event.params.toAddress
  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}
