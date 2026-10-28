import { useSyncExternalStore } from "react";

class ClubModalStore {
  private isOpen: boolean = false;
  private listeners = new Set<() => void>();

  public open() {
    this.isOpen = true;
    this.notify();
  }

  public close() {
    this.isOpen = false;
    this.notify();
  }

  public toggle() {
    this.isOpen = !this.isOpen;
    this.notify();
  }

  public getIsOpen(): boolean {
    return this.isOpen;
  }

  public subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  private notify() {
    this.listeners.forEach((l) => l());
  }
}

export const clubModalStore = new ClubModalStore();

export function useClubModal(): boolean {
  return useSyncExternalStore(
    clubModalStore.subscribe,
    () => clubModalStore.getIsOpen(),
    () => false
  );
}
