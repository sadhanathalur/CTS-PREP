SET SERVEROUTPUT ON;

DECLARE
BEGIN
FOR rec IN (
        SELECT c.Name,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: ' || rec.Name ||
            ' - Loan ' || rec.LoanID ||
            ' is due on ' || rec.DueDate
        );
END LOOP;
END;
/