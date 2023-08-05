<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Validated;

class SuperController extends Controller
{
    //
    public function index()
    {
        $data = [
            'auth' => Auth()->user(),
            'user' => User::orderBy('id', 'desc')->get(),
        ];
        return Inertia::render('Super/Dashboard', $data);
    }

    public function addAdmin()
    {
        $data = [
            'auth' => Auth()->user(),
        ];
        return Inertia::render('Super/AddAdmin', $data);
    }

    public function store_Admin(Request $request)
    {
        $rules = ([
            'name' => 'required',
            'email' => 'required|email:dns',
            'level' => 'required',
            'area' => 'required',
            'password' => 'required',
            'password' => 'required',
        ]);

        $validatedData = $request->validate($rules);

        if ($request->password !== $request->password2) {
            # code...
            return back()->with('error', 'Konfirmasi kata sandi salah');
        }

        $validatedData['password'] = Hash::make($validatedData['password']);

        // dd($validatedData);
        User::create($validatedData);

        return redirect('/super')->with('success', 'tambah admin berhasil');
    }

    public function editAdmin(User $user, Request $request)
    {
        $data = [
            'auth' => Auth()->user(),
            'user' => User::where('email', $request->email)->get(),
        ];
        return Inertia::render('Super/EditAdmin', $data);
    }
}
