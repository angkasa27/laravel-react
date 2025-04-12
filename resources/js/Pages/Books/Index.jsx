import { Link, usePage } from "@inertiajs/react";

export default function Index({ books }) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Books</h1>

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
                    </li>
                ))}
            </ul>
        </div>
    );
}
