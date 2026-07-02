package exercise6_library;

public class Main {

    public static void main(String[] args) {

        // Books sorted alphabetically by title
        Book[] books = {

                new Book(101, "Atomic Habits", "James Clear"),
                new Book(102, "Clean Code", "Robert Martin"),
                new Book(103, "Design Patterns", "GoF"),
                new Book(104, "Java Programming", "Herbert Schildt"),
                new Book(105, "The Alchemist", "Paulo Coelho")

        };

        System.out.println("===== Linear Search =====");

        Book result1 = LibrarySearch.linearSearch(books, "Java Programming");

        if (result1 != null)
            System.out.println(result1);
        else
            System.out.println("Book not found.");

        System.out.println("\n===== Binary Search =====");

        Book result2 = LibrarySearch.binarySearch(books, "Java Programming");

        if (result2 != null)
            System.out.println(result2);
        else
            System.out.println("Book not found.");
    }
}