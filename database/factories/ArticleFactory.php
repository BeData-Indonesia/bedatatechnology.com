<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(20),
            'excerpt' => $this->faker->text(20),
            'description' => $this->faker->text(20),
            'image_url' => $this->faker->text(20),
            'small_image_url' => $this->faker->text(20),
            'content' => $this->faker->paragraph(1,true),
        ];
    }
}
