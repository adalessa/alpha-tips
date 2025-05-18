<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tip>
 */
class TipFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'code' => "require('example').setup({\n  options = {\n    key = 'value'\n  }\n})",
            'language' => 'lua',
            'featured' => $this->faker->boolean,
            'explanation' => $this->faker->text,
            'notes' => $this->faker->text,
            'benefits' => $this->faker->words(3),
            'views' => $this->faker->numberBetween(0, 100),
            'user_id' => \App\Models\User::factory(),
        ];
    }
}
