<?php

namespace App\Http\Controllers;

use App\Models\EDPO;
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

    public function edpo()
    {
        $data = [
            'auth' => Auth()->user(),
            'user' => User::orderBy('id', 'desc')->get(),
            'edpo' => EDPO::where('tertangkap', 0)->latest('id')->get()
        ];
        return Inertia::render('Super/EDPO', $data);
    }

    public function tertangkap()
    {
        $data = [
            'auth' => Auth()->user(),
            'user' => User::orderBy('id', 'desc')->get(),
            'edpo' => EDPO::where('tertangkap', 1)->latest('id')->get()
        ];
        return Inertia::render('Super/Tertangkap', $data);
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
            'email' => 'required|email|unique:users',
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
    public function updateAdmin(User $user, Request $request)
    {
        $rules = ([
            'name' => 'required',
            'level' => 'required',
            'area' => 'required',
        ]);

        if ($user->email != $request->email) {
            # code...$
            $rules['email'] = 'required|email|unique:users';
        }

        $validatedData = $request->validate($rules);

        User::where('id', $user->id)
            ->update($validatedData);

        return redirect('/super')->with('success', 'Data Admin berhasil di perbarui');
    }

    public function updatePassword(User $user, Request $request)
    {
        $rules = ([
            'password' => 'required',
            'password2' => 'required',
        ]);

        if ($request->password == $request->password2) {
            # code...$
            $validatedData = $request->validate($rules);

            $push['password'] = Hash::make($validatedData['password']);

            User::where('id', $user->id)
                ->update($push);

            return redirect('/super')->with('success', 'Data Admin berhasil di perbarui');
        }

        return back()->with('error', 'Konfirmasi kata sandi salah');
    }

    public function deleteAdmin(User $user, Request $request)
    {
        if ($user->email != $request->email) {
            # code...
            return back()->with('error', 'Hapus admin gagal');
        }
        User::destroy($user->id);

        return back()->with('delete', 'Data admin berhasil di hapus');
    }

    public function addEdpo()
    {
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::latest('id')->get(),
        ];
        return Inertia::render('Super/AddEdpo', $data);
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

        return redirect('/super/edpo')->with('success', 'tambah edpo berhasil');
    }
    public function editEdpo(Request $request)
    {
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::where('id', $request->id)->get(),
        ];
        return Inertia::render('Super/EditEdpo', $data);
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

        return redirect('/super/edpo')->with('success', 'Data E-DPO berhasil di perbarui');
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

    public function detailEdpo(EDPO $edpo, Request $request)
    {
        // dd($request);
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::where('id', $edpo->id)->where('nama', $request->nama)->get(),
        ];
        return Inertia::render('Super/DetailEdpo', $data);
    }
    public function detailTertangkap(EDPO $edpo, Request $request)
    {
        // dd($request);
        $data = [
            'auth' => Auth()->user(),
            'edpo' => EDPO::where('id', $edpo->id)->where('nama', $request->nama)->get(),
        ];
        return Inertia::render('Super/DetailTertangkap', $data);
    }
}
