package exercise4_employee;

public class Main {

    public static void main(String[] args) {

        EmployeeManagement manager = new EmployeeManagement(10);

        manager.addEmployee(new Employee(101, "Rahul", "Manager", 60000));
        manager.addEmployee(new Employee(102, "Sadhana", "Developer", 50000));
        manager.addEmployee(new Employee(103, "Priya", "Tester", 45000));

        System.out.println("\n===== Employee List =====");
        manager.displayEmployees();

        System.out.println("\nSearching Employee 102...\n");

        Employee employee = manager.searchEmployee(102);

        if (employee != null)
            System.out.println(employee);
        else
            System.out.println("Employee not found.");

        System.out.println("\nDeleting Employee 103...\n");

        manager.deleteEmployee(103);

        System.out.println("\n===== Updated Employee List =====");
        manager.displayEmployees();
    }
}