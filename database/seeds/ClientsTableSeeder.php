<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB:table('clients')->insert([
            'name' => 'Aira GROUP s.r.o',
            'tin' => 25682598
        ]);
    }
}
