import Login from '@/Pages/Login'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'

const FormEditEdpo = ({ edpo, error }) => {
    const [nama, setNama] = useState(edpo.nama)
    const [tempatLahir, setTempatLahir] = useState(edpo.tempatLahir)
    const [tanggalLahir, setTanggalLahir] = useState(edpo.tanggalLahir)
    const [umur, setUmur] = useState(edpo.umur)
    const [jk, setJK] = useState(edpo.jk)
    const [pendidikan, setPendidikan] = useState(edpo.pendidikan)
    const [alamat, setAlamat] = useState(edpo.alamat)
    const [profesi, setProfesi] = useState(edpo.profesi)
    const [kasusPosisi, setKasusPosisi] = useState(edpo.kasusPosisi)
    const [pidum, setPidum] = useState(edpo.pidum)
    const [pidsus, setPidsus] = useState(edpo.pidsus)
    const [hukuman, setHukuman] = useState(edpo.hukuman)
    const [agama, setAgama] = useState(edpo.agama)
    const [dasarPenetapan, setDasarPenetapan] = useState(edpo.dasarPenetapan)
    const [wilayah, setWilayah] = useState(edpo.wilayah)
    const [tertangkap, setTertangkap] = useState(edpo.tertangkap)
    const [fotoLama, setFotoLama] = useState(edpo.foto)
    const [foto, setFoto] = useState(null)


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
        { id: 14, name: "Kejati Kalimantan Barat" },
    ]

    const daftarAgama = [
        { id: 1, name: "Islam" },
        { id: 2, name: "Kristen Protestan" },
        { id: 3, name: "Kristen Katholik" },
        { id: 4, name: "Hindu" },
        { id: 5, name: "Budha" },
        { id: 6, name: "Khonghucu" },
    ]


    const handleSubmit = () => {
        const data = {
            nama, tempatLahir, tanggalLahir, umur, jk, pendidikan, alamat, profesi,
            kasusPosisi, pidum, pidsus, hukuman, agama, dasarPenetapan, foto, wilayah, tertangkap
        }

        router.post('/admin/edit-edpo/' + edpo.id, data)
    }


    return (
        <div className='section-super mb-7 lg:p-7 lg:m-0 m-3 p-3 lg:mr-6'>
            <h1 className='font-bold text-xl'>
                Form Edit E-DPO
            </h1>
            <div className="grid grid-cols-2">
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Nama</label>
                    <input
                        className='form-input w-full'
                        type="text"
                        placeholder='Masukan nama'
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                    />
                    {error.nama &&
                        <label className='text-red' htmlFor="">Periksa kembali Nama</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Tempat Lahir</label>
                    <input
                        className='form-input w-full'
                        type="text"
                        placeholder='Masukan Tempat Lahir'
                        value={tempatLahir}
                        onChange={(e) => setTempatLahir(e.target.value)}
                    />
                    {error.tempatLahir &&
                        <label className='text-red' htmlFor="">Periksa kembali tempat lahir</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Tanggal Lahir</label>
                    <input
                        className='form-input w-full'
                        type="date"
                        placeholder='Masukan Tanggal Lahir'
                        value={tanggalLahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}
                    />
                    {error.tanggalLahir &&
                        <label className='text-red' htmlFor="">Periksa kembali tanggal lahir</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Umur</label>
                    <input
                        className='form-input w-full'
                        type="number"
                        placeholder='Masukan Usia'
                        value={umur}
                        onChange={(e) => setUmur(e.target.value)}
                    />
                    {error.umur &&
                        <label className='text-red' htmlFor="">Periksa kembali Umur</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Agama</label>
                    <select
                        className='form-input w-full'
                        type="number"
                        placeholder='Masukan Usia'
                        value={agama}
                        onChange={(e) => setAgama(e.target.value)}
                    >
                        <option hidden value="">Pilih Agama</option>
                        {daftarAgama.map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                        <option value={"-"}>Lainnya</option>
                    </select>
                    {error.agama &&
                        <label className='text-red' htmlFor="">Periksa kembali Agama</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Jenis Kelamin</label>
                    <select
                        className='form-input w-full'
                        placeholder='Masukan Usia'
                        value={jk}
                        onChange={(e) => setJK(e.target.value)}
                    >
                        <option hidden={true} value="">Pilih Jenis Kelamin</option>
                        <option value="L">Laki - laki</option>
                        <option value="P">Perempuan</option>
                    </select>
                    {error.jk &&
                        <label className='text-red' htmlFor="">Periksa kembali Jenis Kelamin</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor="">Profesi</label>
                    <input
                        className='form-input w-full'
                        type="text"
                        placeholder='Masukan Profesi'
                        value={profesi}
                        onChange={(e) => setProfesi(e.target.value)}
                    />
                    {error.profesi &&
                        <label className='text-red' htmlFor="">Periksa kembali profesi</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor="">Pendidikan</label>
                    <input
                        className='form-input w-full'
                        type="text"
                        placeholder='Masukan Profesi'
                        value={pendidikan}
                        onChange={(e) => setPendidikan(e.target.value)}
                    />
                    {error.pendidikan &&
                        <label className='text-red' htmlFor="">Periksa kembali pendidikan</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor="">Alamat</label>
                    <textarea
                        className='form-input-area w-full'
                        placeholder='Masukan alamat'
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        rows="5"></textarea>
                    {error.alamat &&
                        <label className='text-red' htmlFor="">Periksa kembali alamat</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Kasus Posisi</label>
                    <textarea
                        className='form-input-area w-full'
                        value={kasusPosisi}
                        onChange={(e) => setKasusPosisi(e.target.value)}
                        placeholder='Masukan Kasus Posisi'
                        rows="5"></textarea>
                    {error.kasusPosisi &&
                        <label className='text-red' htmlFor="">Periksa kembali kasus posisi</label>
                    }
                </div>
                <div className="col-span-1 card shadow-lg border form-group p-3">
                    <div className="card-header text-lg p-2 text-center rounded-xl mb-2">
                        Status Perkara
                    </div>
                    <label htmlFor="">PIDUM</label>
                    <textarea
                        className='form-input-area w-full'
                        placeholder='Masukan PIDUM'
                        rows="1"
                        value={pidum}
                        onChange={(e) => setPidum(e.target.value)}
                    ></textarea>
                    {error.pidum &&
                        <label className='text-red' htmlFor="">Periksa kembali PIDUM</label>
                    }
                    <label className='mt-4' htmlFor="">PIDSUS</label>
                    <textarea
                        className='form-input-area w-full'
                        placeholder='Masukan PIDSUS'
                        rows="1"
                        value={pidsus}
                        onChange={(e) => setPidsus(e.target.value)}
                    ></textarea>
                    {error.pidsus &&
                        <label className='text-red' htmlFor="">Periksa kembali PIDSUS</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Hukuman</label>
                    <textarea
                        className='form-input-area w-full'
                        placeholder='Masukan hukuman'
                        value={hukuman}
                        onChange={(e) => setHukuman(e.target.value)}
                        rows="5"></textarea>
                    {error.hukuman &&
                        <label className='text-red' htmlFor="">Periksa kembali hukuman</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Dasar Penetapan</label>
                    <textarea
                        className='form-input-area w-full'
                        placeholder='Masukan dasar penetapan'
                        value={dasarPenetapan}
                        onChange={(e) => setDasarPenetapan(e.target.value)}
                        rows="5"></textarea>
                    {error.dasarPenetapan &&
                        <label className='text-red' htmlFor="">Periksa kembali dasar penetapan</label>
                    }
                </div>
                <div className="col-span-1 form-group  p-3">
                    <label htmlFor=""><span className='text-red'>*</span>Wilayah</label>
                    <select
                        className='form-input w-full'
                        placeholder='Masukan Usia'
                        value={wilayah}
                        onChange={(e) => setWilayah(e.target.value)}
                    >
                        <option hidden={true} value="">Pilih Wilayah</option>
                        {kejari.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    {error.wilayah &&
                        <label className='text-red' htmlFor="">Periksa kembali tanggal lahir</label>
                    }
                </div>
                <div className="col-span-1 form-group p-3">
                    <label htmlFor="">Foto DPO</label>
                    <img
                        className='h-24 m-2 rounded-md shadow-xl object-cover'
                        src={foto ? URL.createObjectURL(foto) : fotoLama ? "/assets/img/dpo/" + fotoLama : "/assets/img/user.png"}
                        alt="" />
                    <input
                        type="file"
                        accept='.jpg,.jpeg,.png'
                        className="file-input file-input-bordered w-full"
                        // value={foto}
                        onChange={(e) => setFoto(e.target.files[0])}
                    />
                    {error.foto &&
                        <label className='text-red' htmlFor="">Periksa kembali foto</label>
                    }
                </div>
                <div className="col-span-2 p-3">
                    <span className='bg-red'>(*) wajib di isi </span>
                </div>
                <div className="col-span-2 flex justify-center">
                    <button
                        className="btn btn-blue btn-wide"
                        onClick={() => handleSubmit()}
                    >
                        Perbarui
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FormEditEdpo