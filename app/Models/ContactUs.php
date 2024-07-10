<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'name', 'company', 'inquiry'];

    // Jika kamu menggunakan timestamps
    public $timestamps = true;

    // Jika kamu ingin menentukan kolom mana yang harus diisi secara massal
    // protected $fillable = ['email', 'name', 'company', 'inquiry'];
}
