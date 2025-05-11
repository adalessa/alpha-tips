<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tips', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('code');
            $table->string('language');
            $table->boolean('featured')->default(false);
            $table->text('explanation')->nullable();
            $table->text('notes')->nullable();
            $table->json('benefits')->nullable();
            $table->timestamps();

            $table->index('category');
            $table->index('language');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tips');
    }
};
