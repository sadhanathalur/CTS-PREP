package exercise7_recursion;

public class FinancialForecast {

    // Recursive method
    public static double futureValue(double presentValue, double growthRate, int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Call
        return futureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }
}