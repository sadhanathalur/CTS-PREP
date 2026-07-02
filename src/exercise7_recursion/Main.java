package exercise7_recursion;

public class Main {

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10;   //10%
        int years = 5;

        double future = FinancialForecast.futureValue(presentValue, growthRate, years);

        System.out.println("Present Value : Rs. " + presentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : Rs. %.2f%n", future);

    }
}