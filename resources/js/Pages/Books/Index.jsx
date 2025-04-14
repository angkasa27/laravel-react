import { Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ books }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Books
                </h2>
            }
        >
            <Head title="Books" />

            <div className="p-6">
                <Link
                    href="/books/create"
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
                >
                    Create New Book
                </Link>
                <ul className="mt-4">
                    {books.map((book) => (
                        <li key={book.id} className="border-b py-2">
                            <strong>{book.name}</strong> ({book.quantity})<br />
                            <span>{book.description}</span>
                            <br />
                            <Link
                                href={`/books/${book.id}/edit`}
                                className="text-blue-600"
                            >
                                Edit
                            </Link>
                            <Link
                                href={`/books/${book.id}`}
                                method="delete"
                                as="button"
                                className="text-red-600 ml-4"
                                onClick={(e) => {
                                    if (
                                        !confirm(
                                            "Are you sure you want to delete this book?"
                                        )
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                Delete
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
