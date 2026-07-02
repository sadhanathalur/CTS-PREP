import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(10, calculator.add(7, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(4, calculator.subtract(10, 6));
    }

    @Test
    public void testMultiply() {
        assertEquals(20, calculator.multiply(5, 4));
    }

    @Test
    public void testDivide() {
        assertEquals(5, calculator.divide(20, 4));
    }
}