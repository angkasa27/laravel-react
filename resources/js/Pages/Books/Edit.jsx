import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, put, processing, errors } = useForm({
        name: "",
        description: "",
        quantity: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put("/books");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl mb-4">Create Book</h1>
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
                    <label>Description:</label>
                    <br />
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <br />
                    <input
                        type="number"
                        min="0"
                        step="1"
                        value={data.quantity}
                        onChange={(e) => setData("quantity", e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
