import { useState } from 'react'
import { router } from '@inertiajs/react'
import { Product } from '@/types/shop/public'

export function useLikedProducts(products: Product[]) {
  const [isEdit, setIsEdit] = useState(false)
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())

  const toggleEdit = () => {
    if (isEdit && selectedIds.size > 0) {
      submitDelete()
    }

    setIsEdit(v => !v)
    setSelectedIds(new Set())
  }

  const toggleSelect = (id: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const selectAll = () => {
    setSelectedIds(new Set(products.map(p => p.productId)))
  }

  const submitDelete = () => {
    router.post(
      route('liked-products.destroy'),
      { ids: Array.from(selectedIds) },
      {
        preserveScroll: true,
        preserveState: true,
      }
    )
  }

  return {
    isEdit,
    toggleEdit,
    toggleSelect,
    selectAll,
    selectedCount: selectedIds.size,
    isSelected: (id: number) => selectedIds.has(id),
  }
}
