import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Edit({ book, categories }) {
    const { data, setData, put, processing, errors } = useForm({
        name: book.name || "",
        description: book.description || "",
        quantity: book.quantity || "",
        // Initialize with the current book categories. They come in as an array of objects.
        categories: book.categories?.map((cat) => cat.id) || [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming you have a named route "books.update" which receives the book id.
        put(route("books.update", book.id));
    };

    const handleCategoryChange = (e, categoryId) => {
        if (e.target.checked) {
            setData("categories", [...data.categories, categoryId]);
        } else {
            setData(
                "categories",
                data.categories.filter((id) => id !== categoryId)
            );
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Book
                </h2>
            }
        >
            <Head title="Edit Book" />

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
                    {errors.quantity && (
                        <div className="text-red-500">{errors.quantity}</div>
                    )}
                </div>
                <div>
                    <label>Categories:</label>
                    <br />
                    {categories &&
                        categories.map((category) => (
                            <div
                                key={category.id}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    type="checkbox"
                                    value={category.id}
                                    checked={data.categories.includes(
                                        category.id
                                    )}
                                    onChange={(e) =>
                                        handleCategoryChange(e, category.id)
                                    }
                                />
                                <span>{category.name}</span>
                            </div>
                        ))}
                    {errors.categories && (
                        <div className="text-red-500">{errors.categories}</div>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50 disabled:cursor-default"
                >
                    Update
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
