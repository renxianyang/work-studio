import { shallowRef, triggerRef } from 'vue'

export default function useSignal<T = any>(initialValue: T) {
  const r = shallowRef(initialValue)
  const s = (): T => r.value
  s.set = (value) => {
    r.value = value
  }
  s.update = (updater) => {
    r.value = updater(r.value)
  }
  s.mutate = (mutator) => {
    mutator(r.value)
    triggerRef(r)
  }
  return s
}
