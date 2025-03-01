import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div>
            {hasResult && (
                <>
                    <h2>Cotizar</h2>
                    <div className="result">
                        <div>
                            <p>El precio es de: <span className="">{result.PRICE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
