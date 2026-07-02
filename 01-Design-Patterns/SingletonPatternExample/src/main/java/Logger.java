public class Logger {

    // Create the single instance of Logger
    private static Logger instance = new Logger();

    // Private constructor prevents object creation from outside
    private Logger() {

    }

    // Public method to return the single instance
    public static Logger getInstance() {
        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}