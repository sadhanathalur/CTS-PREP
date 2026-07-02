package exercise4_employee;

public class EmployeeManagement {

    private Employee[] employees;
    private int count;

    public EmployeeManagement(int size) {
        employees = new Employee[size];
        count = 0;
    }

    // Add Employee
    public void addEmployee(Employee employee) {

        if (count < employees.length) {
            employees[count++] = employee;
            System.out.println("Employee added successfully.");
        } else {
            System.out.println("Employee array is full.");
        }
    }

    // Search Employee
    public Employee searchEmployee(int employeeId) {

        for (int i = 0; i < count; i++) {
            if (employees[i].getEmployeeId() == employeeId) {
                return employees[i];
            }
        }

        return null;
    }

    // Traverse Employees
    public void displayEmployees() {

        if (count == 0) {
            System.out.println("No employees found.");
            return;
        }

        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
            System.out.println("----------------------");
        }
    }

    // Delete Employee
    public void deleteEmployee(int employeeId) {

        for (int i = 0; i < count; i++) {

            if (employees[i].getEmployeeId() == employeeId) {

                for (int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }

                employees[count - 1] = null;
                count--;

                System.out.println("Employee deleted successfully.");
                return;
            }
        }

        System.out.println("Employee not found.");
    }
}