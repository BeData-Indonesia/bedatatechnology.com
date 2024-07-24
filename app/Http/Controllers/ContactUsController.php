<?php

namespace App\Http\Controllers;

use App\Http\Resources\ContactUsCollection;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    public function index()
    {
        //
        $contactUsData = new ContactUsCollection(ContactUs::paginate(10));

        return Inertia::render('admin/contact_us', ['contactUs' => $contactUsData]);

        // return Inertia::render('Home', [
        //     'title' => "CUY UNIVERSE HOME",
        //     'description' => "Selamat Datang Di Cuy Universe News Portal",
        //     'news' => $contactUsData,
        // ]);
    }


    public function create(Request $request)

    {
        $form = new ContactUs();
        $form->email = $request->email;
        $form->name = $request->name;
        $form->company = $request->company;
        $form->inquiry =$request->inquiry;
        $form->save();
        return  redirect()->to('contact-us')->with('message','berhasil');

    }


    public function store(Request $request)
    {
        // Validasi data request
        $request->validate([
            'email' => 'required|email|max:255',
            'name' => 'required|max:255',
            'company' => 'required|max:255',
            'inquiry' => 'required|max:1000',
        ]);

        // Membuat entri baru
        ContactUs::create($request->all());

        // Redirect ke halaman index dengan pesan sukses
        return redirect()->route('contactUs.index')->with('message', 'Contact us entry created successfully');
    }


    public function show(ContactUs $contactUs)
    {
        $contactUsData = new ContactUsCollection(ContactUs::paginate(10));
        return Inertia::render('admin/dashboard', [
            'contactUsData' => $contactUsData,
        ]);
    }

    public function edit(ContactUs $contactUs)
    {
        // Menampilkan halaman edit
        return Inertia::render('admin/contact_us/edit', ['contactUs' => $contactUs]);
    }


    public function update(Request $request, ContactUs $contactUs)
    {
        // Validasi data request
        $request->validate([
            'email' => 'required|email|max:255',
            'name' => 'required|max:255',
            'company' => 'required|max:255',
            'inquiry' => 'required|max:1000',
        ]);

        // Update data
        $contactUs->update($request->all());

        // Redirect ke halaman index dengan pesan sukses
        return redirect()->route('contactUs.index')->with('message', 'Contact us entry updated successfully');
    }


    public function destroy(ContactUs $contactUs)
    {
        try {
            $contactUs->delete();
            return redirect()->route('contactUs.index')->with('success', 'Contact us entry deleted successfully');
        } catch (\Exception $e) {
            return redirect()->route('contactUs.index')->with('error', 'Failed to delete contact us entry');
        }
    }
}
