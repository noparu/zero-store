"use client"
import React, { useState } from 'react'

const InputProductPage = () => {
    const [form, setForm] = useState<any>({
        no: "",
        title: "",
        description: "",
        category: "",
        price: "",
        link: {
            name: "",
            url: ""
        },
        image_url: ""
    })

    const handleChangeForm = (e: any) => {
        const { name, value } = e.target;

        if (name === "link_name") {
            setForm({
                ...form,
                link: {
                    ...form.link, // Mempertahankan properti lain dalam link
                    name: value,
                },
            });
        } else if (name === "link_url") {
            setForm({
                ...form,
                link: {
                    ...form.link, // Mempertahankan properti lain dalam link
                    url: value,
                },
            });
        } else {
            setForm({
                ...form,
                [name]: value, // Memperbarui properti dengan nama dinamis sesuai input
            });
        }
    };

    const copyToClipboard = async () => {
        // Ubah objek menjadi string JSON
        const formString = JSON.stringify(form, null, 2);

        // Salin string JSON ke clipboard
        await navigator.clipboard.writeText(formString);

        alert("Copied to clipboard!");
        console.log(formString);
    }




    return (
        <form className='p-8 flex flex-col gap-4'>
            <div className="w-full md:w-[350px]">
                <label htmlFor="title" className="block font-medium text-gray-700"> Nama Produk </label>

                <input
                    type="text"
                    name="title"
                    placeholder="Nama Produk"
                    onChange={(e) => handleChangeForm(e)}
                    className="border mt-1 w-full rounded-md border-teal-600 shadow-sm px-3 py-2 outline-teal-700"
                />
            </div>

            <div className={`w-full md:w-[350px]`}>
                <label htmlFor="description" className="block font-medium text-gray-700"> Deskripsi </label>

                <input
                    type="text"
                    name="description"
                    placeholder="Deskripsi"
                    onChange={(e) => handleChangeForm(e)}
                    className="border mt-1 w-full rounded-md border-teal-600 shadow-sm px-3 py-2 outline-teal-700"
                />
            </div>

            <div className={`w-full md:w-[350px]`}>
                <label htmlFor="category" className="block font-medium text-gray-700"> Kategori </label>

                <input
                    type="text"
                    name="category"
                    placeholder="Contoh: Hiasan Dinding"
                    onChange={(e) => handleChangeForm(e)}
                    className="border mt-1 w-full rounded-md border-teal-600 shadow-sm px-3 py-2 outline-teal-700"
                />
            </div>

            <div className={`w-full md:w-[350px]`}>
                <label htmlFor="price" className="block font-medium text-gray-700"> Harga </label>

                <input
                    type="text"
                    name="price"
                    placeholder="Rp. "
                    value={form?.price}
                    onChange={(e) => handleChangeForm(e)}
                    className="border mt-1 w-full rounded-md border-teal-600 shadow-sm px-3 py-2 outline-teal-700"
                />
            </div>

            <div className={`w-full md:w-[350px]`}>
                <label htmlFor="link_name" className="block font-medium text-gray-700"> Tempat Pembelian </label>

                <input
                    type="text"
                    name="link_name"
                    placeholder="Shopee, Tokopedia, dll"
                    onChange={(e) => handleChangeForm(e)}
                    className="border mt-1 w-full rounded-md border-teal-600 shadow-sm px-3 py-2 outline-teal-700"
                />
            </div>

            <div className={`w-full md:w-[350px]`}>
                <label htmlFor="link_url" className="block font-medium text-gray-700"> Link Pembelian </label>

                <input
                    type="text"
                    name="link_url"
                    placeholder="www.shopee.com/productName"
                    onChange={(e) => handleChangeForm(e)}
                    className="border mt-1 w-full rounded-md border-teal-600 shadow-sm px-3 py-2 outline-teal-700"
                />
            </div>

            <div className="flex justify-between w-full md:w-[350px]">
                <button
                    className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                    type='reset'
>
                    Reset
                </button>

                <button
                    type='button'
                    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={copyToClipboard}
                >
                    Salin Data
                </button>
            </div>
        </form>
    )
}

export default InputProductPage
