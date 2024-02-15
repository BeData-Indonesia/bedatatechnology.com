<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\CategoryArticle;

use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     
        Article::factory(20)->create()->each(function ($article) {
           
            $categories = CategoryArticle::inRandomOrder()->take(3)->pluck('id');
            $article->categories()->attach($categories);
        });
    }
}
