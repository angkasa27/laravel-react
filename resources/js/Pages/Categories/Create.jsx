import { useForm } from "@inertiajs/react";

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
        <div className="p-6">
            <h1 className="text-2xl mb-4">Create Category</h1>
            <form onSubmit={handleSubmit}>
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
        </div>
    );
}
