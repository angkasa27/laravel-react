import { Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ categories }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Categories
                </h2>
            }
        >
            <Head title="Categories" />
            <div className="p-6">
                <Link
                    href="/categories/create"
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
                >
                    Create New Categories
                </Link>
                <ul className="mt-4">
                    {categories.map((category) => (
                        <li key={category.id} className="border-b py-2">
                            <strong>{category.name}</strong>
                            <Link
                                href={`/categories/${category.id}/edit`}
                                className="text-blue-600"
                            >
                                Edit
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
