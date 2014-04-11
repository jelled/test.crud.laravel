<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('players', function(Blueprint $table)
		{
            $table->increments('id');

            $table->string('name', 64);
            $table->string('team', 64);
            $table->string('position', 32);
            $table->string('college', 32);
            $table->string('number', 32);
            $table->string('experience', 32);

            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::drop('players');
	}

}
