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
            $table->string('nama');
            $table->string('tempatLahir');
            $table->date('tanggalLahir');
            $table->string('umur');
            $table->string('jk');
            $table->string('pendidikan')->nullable();
            $table->longText('alamat')->nullable();
            $table->string('profesi')->nullable();
            $table->longText('kasusPosisi');
            $table->string('pidum')->nullable();
            $table->string('pidsus')->nullable();
            $table->longText('hukuman');
            $table->string('agama');
            $table->integer('wilayah')->nullable();
            $table->boolean('tertangkap')->autoIncrement(0);
            $table->string('tanggalTertangkap')->nullable();
            $table->string('keteranganTertangkap')->nullable();
            $table->longText('dasarPenetapan')->nullable();
            $table->string('foto')->nullable();
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
