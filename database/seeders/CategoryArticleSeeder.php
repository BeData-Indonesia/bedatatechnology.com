<?php

namespace Database\Seeders;

use App\Models\CategoryArticle;
use Illuminate\Database\Seeder;

class CategoryArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CategoryArticle::factory(10)->create();
    }
}
