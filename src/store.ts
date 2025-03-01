import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency, CryptoPrice, Pair } from './types'
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>

}

// Mostrar las criptos en el state con devtools
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    // spinner: su valor inicial y cuando cambie a true se muestra el spinner
    loading: false,

    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    // Hacer el llamado a la API
    fetchData: async (pair) => {
        // Cambio a true (Spinner)
        set(() => ({
            loading: true
        }))
        // Obtengo la cotización
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            // Y regreso a false el loading (Spinner)
            loading: false
        }))
    }

})))

