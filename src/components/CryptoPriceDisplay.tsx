import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {hasResult && (
                <>
                    <h2>Cotizar</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen Cryptomoneda"
                        />
                        <div>
                            <p>El precio es de: <span className="">{result.PRICE}</span></p>
                            <p>Precio más alto del dia: <span className="">{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del dia: <span className="">{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span className="">{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span className="">{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
