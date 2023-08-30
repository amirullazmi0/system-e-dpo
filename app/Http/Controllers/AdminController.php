<?php

namespace App\Http\Controllers;

use App\Models\EDPO;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    //
    public function index()
    {
        $data = [
            'auth' => Auth()->user(),
            'user' => User::orderBy('id', 'desc')->get(),
            'edpo' => EDPO::where('wilayah', Auth()->user()->area)->where('tertangkap', 0)->latest('id')->get()
        ];
        return Inertia::render('Admin/Dashboard', $data);
    }
    public function addEdpo()
    {
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::latest('id')->get(),
        ];
        return Inertia::render('Admin/AddEdpo', $data);
    }

    public function detailEdpo(EDPO $edpo, Request $request)
    {
        // dd($request);
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::where('id', $edpo->id)->where('nama', $request->nama)->get(),
        ];
        return Inertia::render('Admin/DetailEdpo', $data);
    }

    public function storeEdpo(Request $request)
    {
        $rules = ([
            'nama' => 'required',
            'tempatLahir' => 'required',
            'tanggalLahir' => 'required',
            'umur' => 'required',
            'jk' => 'required',
            'pendidikan' => 'nullable',
            'alamat' => 'nullable',
            'profesi' => 'nullable',
            'pidum' => 'nullable',
            'pidsus' => 'nullable',
            'wilayah' => 'required',
            'tertankap' => 'nullable',
            'dasarPenetapan' => 'nullable',
            'kasusPosisi' => 'required',
            'hukuman' => 'required',
            'agama' => 'required',
            'foto' => 'nullable|max:4072'
        ]);

        $validatedData = $request->validate($rules);
        $validatedData['tertangkap'] = 0;
        if ($request->file('foto')) {
            $fileName = 'img-dpo-' . time() . '.' . $request->file('foto')->extension();
            $path_url = 'assets/img/dpo/';
            $request->file('foto')->move(public_path($path_url), $fileName);
            $validatedData['foto'] =  $fileName;
        }


        EDPO::create($validatedData);

        return redirect('/admin')->with('success', 'tambah edpo berhasil');
    }

    public function editEdpo(Request $request)
    {
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::where('id', $request->id)->get(),
        ];
        return Inertia::render('Admin/EditEdpo', $data);
    }

    public function UpdateEdpo(EDPO $edpo, Request $request)
    {
        $rules = ([
            'nama' => 'required',
            'tempatLahir' => 'required',
            'tanggalLahir' => 'required',
            'umur' => 'required',
            'jk' => 'required',
            'pendidikan' => 'nullable',
            'alamat' => 'nullable',
            'profesi' => 'nullable',
            'pidum' => 'nullable',
            'pidsus' => 'nullable',
            'wilayah' => 'required',
            'tertankap' => 'nullable',
            'dasarPenetapan' => 'nullable',
            'kasusPosisi' => 'required',
            'hukuman' => 'required',
            'agama' => 'required',
        ]);

        if ($request->file('foto') &&  $edpo->foto) {
            $file = 'assets/img/dpo/' . $edpo->foto;
            unlink($file);
            $rules['foto'] = 'max:4072';
        }

        $validatedData = $request->validate($rules);

        if ($request->file('foto')) {
            $fileName = 'img-dpo-' . time() . '.' . $request->file('foto')->extension();
            $path_url = 'assets/img/dpo/';
            $request->file('foto')->move(public_path($path_url), $fileName);
            $validatedData['foto'] =  $fileName;
        }


        EDPO::where('id', $edpo->id)
            ->update($validatedData);

        return redirect('/admin')->with('success', 'Data E-DPO berhasil di perbarui');
    }

    public function addTertangkap(EDPO $edpo, Request $request)
    {
        $validatedData['tertangkap'] = $request->tertangkap;

        EDPO::where('id', $edpo->id)
            ->update($validatedData);

        return back()->with('success', 'E-DPO sudah tertangkap');
    }

    public function moveTertangkap(EDPO $edpo, Request $request)
    {
        $validatedData['tertangkap'] = $request->tertangkap;

        EDPO::where('id', $edpo->id)
            ->update($validatedData);

        return back()->with('success', 'E-DPO Tertangkap Dibatalkan');
    }

    public function deleteEdpo(EDPO $edpo, Request $request)
    {

        if ($edpo->id != $request->id) {
            return back()->with('error', 'Hapus E-DPO gagal');
        }

        if ($edpo->foto) {
            $file = 'assets/img/dpo/' . $edpo->foto;
            unlink($file);
        }

        EDPO::destroy($edpo->id);

        return back()->with('delete', 'Data E-DPO berhasil di hapus');
    }
    public function tertangkap()
    {
        $data = [
            'auth' => Auth()->user(),
            'user' => User::orderBy('id', 'desc')->get(),
            'edpo' => EDPO::where('wilayah', Auth()->user()->area)->where('tertangkap', 1)->latest('id')->get()
        ];
        return Inertia::render('Admin/Tertangkap', $data);
    }
    public function detailTertangkap(EDPO $edpo, Request $request)
    {
        // dd($request);
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::where('id', $edpo->id)->where('nama', $request->nama)->get(),
        ];
        return Inertia::render('Admin/DetailTertangkap', $data);
    }
}
