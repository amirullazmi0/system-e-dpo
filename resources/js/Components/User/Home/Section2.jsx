import React from 'react'

const Section2 = () => {
    const kejari = [
        { id: 1, name: "Kejari Pontianak" },
        { id: 2, name: "Kejari Singkawang" },
        { id: 3, name: "Kejari Mempawah" },
        { id: 4, name: "Kejari Sambas" },
        { id: 5, name: "Kejari Bengkayang" },
        { id: 6, name: "Kejari Landak" },
        { id: 7, name: "Kejari Sanggau" },
        { id: 8, name: "Kejari Sekadau" },
        { id: 9, name: "Kejari Sintang" },
        { id: 10, name: "Kejari Kapuas Hulu" },
        { id: 11, name: "Kejari Ketapang" },
        { id: 12, name: "Cabjari Entikong" },
        { id: 13, name: "Cabjari Pemangkat" },
    ]
    return (
        <>
            <div className="card-section2">
                <div className="header-section2">
                    Kejari
                </div>
                <div className="body-section2">
                    {kejari.map((kk) => (
                        <button key={kk.id} className="btn w-full btn-md">
                            {kk.name}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section2