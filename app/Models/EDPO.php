<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EDPO extends Model
{
    use HasFactory;

    protected $table = 'e-dpo';

    protected $fillable = [
        'name',
        'bornPlace',
        'bornDate',
        'age',
        'gender',
        'nation',
        'address',
        'profession',
        'status',
        'casePosition',
        'caseDesition',
        'attemp',
        'religion',
        'photo',
    ];
}
