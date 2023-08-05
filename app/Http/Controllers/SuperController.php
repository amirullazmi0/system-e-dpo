<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SuperController extends Controller
{
    //
    public function index()
    {
        $data = [
            'auth' => Auth()->user()
        ];
        return Inertia::render('Super/Dashboard', $data);
    }

    public function addAdmin()
    {
        $data = [
            'auth' => Auth()->user()
        ];
        return Inertia::render('Super/AddAdmin', $data);
    }
}
