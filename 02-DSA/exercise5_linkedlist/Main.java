package exercise5_linkedlist;

public class Main {

    public static void main(String[] args) {

        TaskLinkedList taskList = new TaskLinkedList();

        taskList.addTask(101, "Complete Assignment", "Pending");
        taskList.addTask(102, "Prepare Presentation", "In Progress");
        taskList.addTask(103, "Submit Project", "Pending");

        System.out.println("\n===== Task List =====");
        taskList.displayTasks();

        System.out.println("\nSearching Task 102...\n");
        taskList.searchTask(102);

        System.out.println("\nDeleting Task 103...\n");
        taskList.deleteTask(103);

        System.out.println("\n===== Updated Task List =====");
        taskList.displayTasks();
    }
}