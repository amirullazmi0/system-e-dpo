<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    //
    public function login()
    {
        $data = [];
        return Inertia::render('Login', $data);
    }
    public function index()
    {
        $data = [];
        return Inertia::render('User/Home', $data);
    }

    public function edpo()
    {
        $data = [];
        return Inertia::render('User/Edpo', $data);
    }

    public function tertangkap()
    {
        $data = [];
        return Inertia::render('User/Tertangkap', $data);
    }
}
