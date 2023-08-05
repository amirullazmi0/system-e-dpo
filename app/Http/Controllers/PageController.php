<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PageController extends Controller
{
    //
    public function login()
    {
        if (Auth::check()) {
            if (Auth()->user()->level == 1) {
                return redirect()->intended('/super')->with('login', 'Anda Sudah login !');
            }
        }
        $data = [
            'user' => User::all()
        ];
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
