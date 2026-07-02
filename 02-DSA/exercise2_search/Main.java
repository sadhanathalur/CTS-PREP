package exercise2_search;

public class Main {

    public static void main(String[] args) {

        // Sorted array (Alphabetical order)
        Product[] products = {

                new Product(101, "Headphones", "Electronics"),
                new Product(102, "Keyboard", "Electronics"),
                new Product(103, "Laptop", "Electronics"),
                new Product(104, "Mouse", "Electronics"),
                new Product(105, "Speaker", "Electronics")

        };

        System.out.println("===== Linear Search =====");

        Product result1 = SearchOperations.linearSearch(products, "Laptop");

        if (result1 != null)
            System.out.println(result1);
        else
            System.out.println("Product not found.");

        System.out.println("\n===== Binary Search =====");

        Product result2 = SearchOperations.binarySearch(products, "Laptop");

        if (result2 != null)
            System.out.println(result2);
        else
            System.out.println("Product not found.");
    }
}