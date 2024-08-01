<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagesGallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'path',
    ];

    protected $table = 'images_gallery';
}
