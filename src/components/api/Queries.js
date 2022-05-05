const Queries = [
  {
    id: 1,
    querydis:
      "Retrieve Customer and Vehicle details who has been involved in an incident and claim status is pending – Customer, vehicle, claim status, incident",
    query:`SELECT c.cust_id, v.vehicle_id FROM ADVAIT_customer C, ADVAIT_vehicle V WHERE V.CUST_ID = C.CUST_ID AND 
    C.CUST_ID IN ( SELECT C1.CUST_ID FROM ADVAIT_claim C1 WHERE C1.claim_status
      = 'PENDING' AND C1.INCIDENT_ID IN (SELECT I.INCIDENT_ID FROM ADVAIT_incident_report I 
      WHERE I.CUST_ID = C1.CUST_ID AND I.vehicle_id = V.vehicle_id ));`
      },{
    id: 2,
    querydis:
      "Retrieve customer details who has premium payment amount greater than the sum of all the customerIds in the database – premium payment, customer",
    query: 
        `SELECT * FROM ADVAIT_CUSTOMER
        JOIN ADVAIT_PREMIUM_PAYMENT 
          ON ADVAIT_CUSTOMER.CUST_ID=ADVAIT_PREMIUM_PAYMENT .CUST_ID
        WHERE 
          ADVAIT_PREMIUM_PAYMENT .PREMIUM_PAYMENT_AMOUNT> (SELECT SUM(ADVAIT_CUSTOMER.CUST_ID) FROM ADVAIT_CUSTOMER);`
},{
    id: 3,
    querydis:
      "Retrieve Company details whose number of products is greater than departments, where the departments are located in more than one location—company, product, departments, office",
    query:
    `SELECT C.COMPANY_NAME FROM advait_INSURANCE_COMPANY C INNER JOIN advait_PRODUCT P ON P.COMPANY_NAME=C.COMPANY_NAME GROUP BY P.COMPANY_NAME
    HAVING COUNT(*) >ALL(SELECT COUNT(*) FROM advait_INSURANCE_COMPANY GROUP BY COMPANY_NAME HAVING COUNT(COMPANY_LOCATION)>1);`
  },{
    id: 4,
    querydis:
      "Select Customers who have more than one Vehicle, where the premium for one of the Vehicles is not paid and it is involved in accident",
    query:
    `SELECT CONCAT(C.CUST_ID,",",CUST_FNAME,CUST_LNAME) AS CUST_INFO FROM (((advait_CUSTOMER C INNER JOIN advait_VEHICLE V ON (C.CUST_ID=V.CUST_ID) ) 
    INNER JOIN advait_PREMIUM_PAYMENT P ON (P.CUST_ID=V.CUST_ID AND P.PREMIUM_PAYMENT_AMOUNT=0)) INNER JOIN advait_INCIDENT_REPORT IR ON (IR.CUST_ID=P.CUST_ID AND IR.INCIDENT_TYPE='ACCIDENT'))
    GROUP BY V.CUST_ID HAVING COUNT(V.VEHICLE_ID)>1;`
  },{
    id: 5,
    querydis:
      "Select all vehicles which have premium more than its vehicle number.",
    query:
    `SELECT distinct(V.VEHICLE_ID) FROM advait_VEHICLE V, advait_PREMIUM_PAYMENT P WHERE 
    V.CUST_ID = P.CUST_ID AND P.PREMIUM_PAYMENT_ID > V.VEHICLE_NUMBER;`
  },{
    id: 6,
    querydis:
      "Retrieve Customer details whose Claim Amount is less than Coverage Amount and Claim Amount is greater than Sum of (CLAIM_SETTLEMENT_ID, VEHICLE_ID, CLAIM_ID, CUST_ID)",
    query:
    `
    SELECT C.CUST_ID,CUST_FNAME,CUST_LNAME FROM (advait_CUSTOMER C INNER JOIN advait_CLAIM_SETTLEMENT CS ON CS.CUST_ID=C.CUST_ID
      INNER JOIN advait_CLAIM CL ON (CL.CLAIM_ID=CS.CLAIM_ID)INNER JOIN advait_COVERAGE CO ON (CO.COVERAGE_ID=CS.COVERAGE_ID AND 
      CL.CLAIM_AMOUNT<CO.COVERAGE_AMOUNT AND CL.CLAIM_AMOUNT>(CS.CLAIM_SETTLEMENT_ID+CS.VEHICLE_ID+CS.CLAIM_ID+CS.CUST_ID)));
    `
  }
];

export default Queries;
