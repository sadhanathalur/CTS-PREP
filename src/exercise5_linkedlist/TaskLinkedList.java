package exercise5_linkedlist;

public class TaskLinkedList {

    private Task head;

    // Add Task
    public void addTask(int id, String name, String status) {

        Task newTask = new Task(id, name, status);

        if (head == null) {
            head = newTask;
        } else {

            Task temp = head;

            while (temp.next != null) {
                temp = temp.next;
            }

            temp.next = newTask;
        }

        System.out.println("Task added successfully.");
    }

    // Search Task
    public void searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id) {
                System.out.println(temp);
                return;
            }

            temp = temp.next;
        }

        System.out.println("Task not found.");
    }

    // Display Tasks
    public void displayTasks() {

        if (head == null) {
            System.out.println("No tasks available.");
            return;
        }

        Task temp = head;

        while (temp != null) {

            System.out.println(temp);
            System.out.println("----------------------");

            temp = temp.next;
        }
    }

    // Delete Task
    public void deleteTask(int id) {

        if (head == null) {
            System.out.println("List is empty.");
            return;
        }

        if (head.taskId == id) {
            head = head.next;
            System.out.println("Task deleted successfully.");
            return;
        }

        Task current = head;

        while (current.next != null && current.next.taskId != id) {
            current = current.next;
        }

        if (current.next == null) {
            System.out.println("Task not found.");
        } else {
            current.next = current.next.next;
            System.out.println("Task deleted successfully.");
        }
    }
}