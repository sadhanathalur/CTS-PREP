package exercise1_inventory;

import java.util.HashMap;

public class InventoryManager {

    // HashMap to store products
    private HashMap<Integer, Product> inventory = new HashMap<>();

    // Add a product
    public void addProduct(Product product) {
        if (inventory.containsKey(product.getProductId())) {
            System.out.println("Product with ID " + product.getProductId() + " already exists.");
        } else {
            inventory.put(product.getProductId(), product);
            System.out.println("Product added successfully.");
        }
    }

    // Update product
    public void updateProduct(int productId, int quantity, double price) {
        Product product = inventory.get(productId);

        if (product != null) {
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Product updated successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    // Delete product
    public void deleteProduct(int productId) {
        if (inventory.remove(productId) != null) {
            System.out.println("Product deleted successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    // Display all products
    public void displayProducts() {
        if (inventory.isEmpty()) {
            System.out.println("Inventory is empty.");
            return;
        }

        System.out.println("\n===== Inventory =====");

        for (Product product : inventory.values()) {
            System.out.println(product);
            System.out.println("------------------------");
        }
    }
}