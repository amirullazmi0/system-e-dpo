import React from 'react'

const Section2 = () => {
    const kejari = [
        { id: 1, name: "Kabupaten Bengkayang" },
        { id: 2, name: "Kabupaten Kapuas Hulu" },
        { id: 3, name: "Kabupaten Kayong Utara" },
        { id: 4, name: "Kabupaten Ketapang" },
        { id: 5, name: "Kabupaten Kubu Raya" },
        { id: 6, name: "Kabupaten Landak" },
        { id: 7, name: "Kabupaten Melawi" },
        { id: 8, name: "Kabupaten Mempawah" },
        { id: 9, name: "Kabupaten Sambas" },
        { id: 10, name: "Kabupaten Sekadau" },
        { id: 11, name: "Kabupaten Sintang" },
        { id: 12, name: "Kota Pontianak" },
        { id: 13, name: "Kota Singkawang" },
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