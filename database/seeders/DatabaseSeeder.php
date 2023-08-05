<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name' => 'Danke Rajagukguk',
                'email' => 'danke@gmail.com',
                'level' => 1,
                'area' => 'pusat',
                'password' => bcrypt('passwordsuper')
            ],
        ];
        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
