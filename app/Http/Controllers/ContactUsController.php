<?php

namespace App\Http\Controllers;

use App\Http\Resources\ContactUsCollection;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $contactUsData = new ContactUsCollection(ContactUs::paginate(5));
        
        // return Inertia::render('Home', [
        //     'title' => "CUY UNIVERSE HOME",
        //     'description' => "Selamat Datang Di Cuy Universe News Portal",
        //     'news' => $contactUsData,
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function show(ContactUs $contactUs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function edit(ContactUs $contactUs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContactUs $contactUs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactUs  $contactUs
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactUs $contactUs)
    {
        //
    }
}
