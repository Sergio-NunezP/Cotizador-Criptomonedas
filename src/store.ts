import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency } from './types'
import { getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>

}

// Mostrar las criptos en el state con devtools
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
})))

