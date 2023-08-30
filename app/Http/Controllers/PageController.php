<?php

namespace App\Http\Controllers;

use App\Models\EDPO;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    //
    public function login()
    {
        if (Auth::check()) {
            if (Auth()->user()->level == 1) {
                return redirect()->intended('/super')->with('login', 'Anda Sudah login !');
            }
            if (Auth()->user()->level == 2) {
                return redirect()->intended('/admin')->with('login', 'Anda Sudah login !');
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

    public function edpo(Request $request)
    {
        if ($request->wilayah == 'Semua') {
            // dd($request);
            $data = [
                'edpo' => EDPO::where('tertangkap', 0)->latest('id')->get(),
                'active' => $request->id,
            ];
        } else {
            $data = [
                'edpo' => EDPO::where('wilayah', $request->id)->where('tertangkap', 0)->latest('id')->get(),
                'active' => $request->id,
            ];
        }
        return Inertia::render('User/Edpo', $data);
    }

    public function detailEdpo(EDPO $edpo, Request $request)
    {
        $data = [
            'edpo' => EDPO::where('id', $edpo->id, $request->id)->latest('id')->get(),
            'active' => $request->id,
        ];

        return Inertia::render('User/DetailEdpo', $data);
    }
    public function detailTertangkap(EDPO $edpo, Request $request)
    {
        $data = [
            'edpo' => EDPO::where('id', $edpo->id, $request->id)->latest('id')->get(),
            'active' => $request->id,
        ];

        return Inertia::render('User/DetailTertangkap', $data);
    }

    public function tertangkap(Request $request)
    {
        if ($request->wilayah == 'Semua') {
            // dd($request);
            $data = [
                'edpo' => EDPO::where('tertangkap', 1)->latest('id')->get(),
                'active' => $request->id,
            ];
        } else {
            $data = [
                'edpo' => EDPO::where('wilayah', $request->id)->where('tertangkap', 1)->latest('id')->get(),
                'active' => $request->id,
            ];
        }
        return Inertia::render('User/Tertangkap', $data);
    }
}
