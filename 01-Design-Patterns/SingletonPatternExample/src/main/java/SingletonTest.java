public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application started");
        logger2.log("Singleton Pattern Example");

        System.out.println("Are both objects same? " + (logger1 == logger2));
    }
}