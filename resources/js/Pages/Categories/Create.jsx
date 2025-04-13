import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        color: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/categories");
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Category
                </h2>
            }
        >
            <Head title="Create Category" />

            <form onSubmit={handleSubmit} className="p-6">
                <div>
                    <label>Name:</label>
                    <br />
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <div className="text-red-500">{errors.name}</div>
                    )}
                </div>
                <div>
                    <label>Color:</label>
                    <br />
                    <input
                        type="text"
                        value={data.color}
                        onChange={(e) => setData("color", e.target.value)}
                    />
                    {errors.color && (
                        <div className="text-red-500">{errors.color}</div>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50 disabled:cursor-default"
                >
                    Save
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
