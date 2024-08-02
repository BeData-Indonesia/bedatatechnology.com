<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'excerpt',
        'description',
        'image_url',
        'small_image_url',
        'content',
    ];

    public function categories()
    {
        return $this->belongsToMany(CategoryArticle::class, 'article_category_article');
    }
}
