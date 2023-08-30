<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EDPO extends Model
{
    use HasFactory;

    protected $table = 'e-dpo';

    protected $fillable = [
        'nama',
        'tempatLahir',
        'tanggalLahir',
        'umur',
        'jk',
        'kasusPosisi',
        'hukuman',
        'agama',
        'dasarPenetapan',
        'foto',
        'pendidikan',
        'alamat',
        'profesi',
        'pidum',
        'pidsus',
        'wilayah',
        'tertangkap',
        // 'waktuTertangkap',
        // 'keteranganTertangkap'
    ];

    // protected $nullable = [
    //     'pendidikan',
    //     'alamat',
    //     'profesi',
    //     'pidum',
    //     'pidsus',
    //     'wilayah',
    //     'tertangkap',
    // ];
}
