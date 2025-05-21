<?php

use App\Models\Tip;

test('it increments tip views when accessing a tip', function () {
    // Arrange: Create a tip
    $tip = Tip::factory()->create(['views' => 0]);

    // Act: Access the tip route
    $this->get(route('tip', $tip));

    // Assert: Check if the views count has incremented
    $this->assertDatabaseHas('tips', [
        'id' => $tip->id,
        'views' => 1,
    ]);
});
