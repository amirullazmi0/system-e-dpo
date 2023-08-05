<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('e-dpo', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('bornPlace');
            $table->date('bornDate');
            $table->string('age');
            $table->string('gender');
            $table->string('nation');
            $table->longText('address')->nullable();
            $table->string('profession')->nullable();
            $table->string('status');
            $table->string('casePosition');
            $table->string('caseDecision');
            $table->string('attemp');
            $table->string('religion');
            $table->string('photo');
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
        Schema::dropIfExists('e_d_p_o_s');
    }
};