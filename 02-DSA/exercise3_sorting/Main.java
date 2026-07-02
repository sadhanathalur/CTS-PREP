package exercise3_sorting;

public class Main {

    public static void main(String[] args) {

        Order[] orders = {

                new Order(101, "Rahul", 4500),
                new Order(102, "Sadhana", 1200),
                new Order(103, "Anjali", 8900),
                new Order(104, "Karthik", 2500),
                new Order(105, "Priya", 6700)

        };

        System.out.println("===== Original Orders =====");

        SortingAlgorithms.display(orders);

        // Bubble Sort
        SortingAlgorithms.bubbleSort(orders);

        System.out.println("\n===== Bubble Sort =====");

        SortingAlgorithms.display(orders);

        // New array for Quick Sort
        Order[] orders2 = {

                new Order(101, "Rahul", 4500),
                new Order(102, "Sadhana", 1200),
                new Order(103, "Anjali", 8900),
                new Order(104, "Karthik", 2500),
                new Order(105, "Priya", 6700)

        };

        SortingAlgorithms.quickSort(orders2, 0, orders2.length - 1);

        System.out.println("\n===== Quick Sort =====");

        SortingAlgorithms.display(orders2);
    }
}