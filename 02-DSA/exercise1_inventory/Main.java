package exercise1_inventory;

public class Main {

    public static void main(String[] args) {

        InventoryManager manager = new InventoryManager();

        // Create products
        Product p1 = new Product(101, "Laptop", 10, 65000.0);
        Product p2 = new Product(102, "Keyboard", 30, 1200.0);
        Product p3 = new Product(103, "Mouse", 25, 700.0);

        // Add products
        manager.addProduct(p1);
        manager.addProduct(p2);
        manager.addProduct(p3);

        // Display inventory
        manager.displayProducts();

        // Update product
        System.out.println("\nUpdating Product 102...\n");
        manager.updateProduct(102, 40, 1500.0);

        // Display inventory after update
        manager.displayProducts();

        // Delete product
        System.out.println("\nDeleting Product 103...\n");
        manager.deleteProduct(103);

        // Display final inventory
        manager.displayProducts();
    }
}