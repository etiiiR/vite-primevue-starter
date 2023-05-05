import { acceptHMRUpdate, defineStore } from 'pinia'
import { o } from 'odata'

export const useProductStore = defineStore('product', () => {
  /**
   * Current name of the user.
   */
  const loading = ref(true)
  const products = ref([])
  const skip = ref(0)
  const top = ref(20)
  const totalCount = ref(0)
  const columnOriginal = [
    { field: 'TiId', header: 'TiId', type: 'numeric', style: 'min-width: 12rem', filterbar: [] },
    { field: 'TiIdType', header: 'TiIdType', style: 'min-width: 12rem', filterbar: [] },
    { field: 'ValidFrom', type: 'date', header: 'ValidFrom', style: 'min-width: 12rem', filterbar: [] },
    { field: 'ValidityBase', header: 'ValidityBase', style: 'min-width: 12rem', filterbar: [] },
    { field: 'WgdsTmCountry', header: 'WgdsTmCountry', style: 'min-width: 12rem', filterbar: [] },
    { field: 'WgdsTmSubdivis', header: 'WgdsTmSubdivis', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Zzjahrgang', header: 'Zzjahrgang', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Batch', header: 'Batch', style: 'min-width: 12rem', filterbar: [] },
    { field: 'BrandName', header: 'BrandName', style: 'min-width: 12rem', filterbar: [] },
    { field: 'BrandownerName', header: 'BrandownerName', style: 'min-width: 12rem', filterbar: [] },
    { field: 'DrainedWeight', header: 'DrainedWeight', style: 'min-width: 12rem', filterbar: [] },
    { field: 'DrainedWeightUom', header: 'DrainedWeightUom', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Ernam', header: 'Ernam', style: 'min-width: 12rem', filterbar: [] },
    { field: 'GlnInfoProvider', header: 'GlnInfoProvider', style: 'min-width: 12rem', filterbar: [] },
    { field: 'ValidFrom', header: 'ValidFrom', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Lahq', header: 'Lahq', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Laiso', header: 'Laiso', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Matnr', header: 'Matnr', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Meinh', header: 'Meinh', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Netcontent', header: 'Netcontent', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Netcontentuom', header: 'Netcontentuom', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Percentageofalcoholbyvolume', header: 'Percentageofalcoholbyvolume', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Prinbr', header: 'Prinbr', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Productservingsize', header: 'Productservingsize', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Productservingsizeuom', header: 'Productservingsizeuom', style: 'min-width: 12rem', filterbar: [] },
    { field: 'ServingPerPkg', header: 'ServingPerPkg', style: 'min-width: 12rem', filterbar: [] },
    { field: 'Status', header: 'Status', style: 'min-width: 12rem', filterbar: [] },
  ]
  const columns = ref(
    columnOriginal,
  )

  async function onPage(event: any) {
    skip.value = event.first
    top.value = event.rows
  }

  async function addColumn(name: string, label: string) {
    columns.value.push({ field: name, header: label, style: 'min-width: 12rem', filterbar: [] })
  }
  const AllergenCodes = ref(new Set())

  watch(AllergenCodes.value, (newVal, oldVal) => {
    const allergenValues = Array.from(newVal)
    allergenValues.forEach((value) => {
      const existingColumn = columns.value.find(column => column.field === value)
      if (!existingColumn) {
        const allergenCodeColumn = {
          field: value,
          header: value,
          style: 'min-width: 12rem',
          filterbar: [],
        }
        columns.value.push(allergenCodeColumn)
      }
    })
  })

  watch([skip, top], () => {
    loading.value = true
    setProducts()
  })

  async function setProducts() {
    columns.value = columnOriginal
    const countResult = await o('/api/')
      .get('ZALLERGENE_C_HEADER/$count?sap-client=703')
      .query()
    totalCount.value = Number(countResult)

    const result = await o('/api/')
      .get('ZALLERGENE_C_HEADER?sap-client=703')
      .query({ $format: 'json', $skip: skip.value, $top: top.value })
    const data = await result
    products.value = data.d.results
    getAllergene()
  }

  async function getAllergene() {
    for (const product of products.value) {
      const tiId = product.TiId

      const result = await o('/api/')
        .get(`ZPIM_ALLERGENE_TO_HEADER(p_tiid='${tiId}')/Set?sap-client=703'`)
        .query({ $format: 'json' })
      const data = await result
      if (data.d) {
        const newdata = data.d.results
        newdata.forEach((Allergene) => {
          product[Allergene.AllergTypeCode] = Allergene.LevelContain
          const newValue = Allergene.AllergTypeCode
          if (!AllergenCodes.value.has(newValue))
            AllergenCodes.value.add(newValue)
        })
      }
    }
    loading.value = false
  }

  return {
    loading,
    onPage,
    setProducts,
    addColumn,
    totalCount,
    AllergenCodes,
    columns,
    products,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore as any, import.meta.hot))
