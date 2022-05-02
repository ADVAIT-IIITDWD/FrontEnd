const Queries = [
  {
    id: 1,
    querydis:
      "Retrieve Customer and Vehicle details who has been involved in an incident and claim status is pending-Customer, vehicle, claim status, incident",
    query:
      `select c.cust_id, v.vehicle_id from ADVAIT_customer as c, advait_vehicle as v
      where c.cust_id in (select cust_id from advait_claim where calim_status is null);`,
  },{
    id: 2,
    querydis:
      "Retrieve Customer and Vehicle details who has been involved in an incident and claim status is pending-Customer, vehicle, claim status, incident",
    query: 
        `SELECT * FROM T16_CUSTOMER C WHERE C.T16_CUST_ID IN ( 
            SELECT P.T16_CUST_ID FROM T16_PREMIUM_PAYMENT P WHERE 
            P.T16_CUST_ID = C.T16_CUST_ID AND P.T16_PREMIUM_PAYMENT_AMOUNT >
            ( SELECT SUM(T16_CUST_ID) FROM T16_CUSTOMER ));
        SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));`
},{
    id: 3,
    querydis:
      "Retrieve Customer and Vehicle details who has been involved in an incident and claim status is pending-Customer, vehicle, claim status, incident",
    query:
    `SELECT C.T16_COMPANY_NAME FROM T16_INSURANCE_COMPANY C INNER JOIN T16_PRODUCT P ON P.T16_COMPANY_NAME=C.T16_COMPANY_NAME GROUP BY P.T16_COMPANY_NAME
    HAVING COUNT(*) >ALL(SELECT COUNT(*) FROM T16_INSURANCE_COMPANY GROUP BY T16_COMPANY_NAME HAVING COUNT(T16_COMPANY_LOCATION)>1);
    `
  },{
    id: 4,
    querydis:
      "Retrieve Customer and Vehicle details who has been involved in an incident and claim status is pending-Customer, vehicle, claim status, incident",
    query:
    `SELECT CONCAT(C.T16_CUST_ID,",",T16_CUST_FNAME,T16_CUST_LNAME) AS CUST_INFO FROM (((T16_CUSTOMER C INNER JOIN T16_VEHICLE V ON (C.T16_CUST_ID=V.T16_CUST_ID) ) 
    INNER JOIN T16_PREMIUM_PAYMENT P ON (P.T16_CUST_ID=V.T16_CUST_ID AND P.T16_PREMIUM_PAYMENT_AMOUNT=0)) INNER JOIN T16_INCIDENT_REPORT IR ON (IR.T16_CUST_ID=P.T16_CUST_ID AND IR.T16_INCIDENT_TYPE='ACCIDENT'))
    GROUP BY V.T16_CUST_ID HAVING COUNT(V.T16_VEHICLE_ID)>1;`
  },{
    id: 5,
    querydis:
      "Retrieve Customer and Vehicle details who has been involved in an incident and claim status is pending-Customer, vehicle, claim status, incident",
    query:
    `SELECT distinct(V.T16_VEHICLE_ID) FROM T16_VEHICLE V, T16_PREMIUM_PAYMENT P WHERE 
	V.T16_CUST_ID = P.T16_CUST_ID AND P.T16_PREMIUM_PAYMENT_ID > V.T16_VEHICLE_NUMBER;`
  },{
    id: 6,
    querydis:
      "Retrieve Customer and Vehicle details who has been involved in an incident and claim status is pending-Customer, vehicle, claim status, incident",
    query:
    `SELECT CONCAT(C.T16_CUST_ID,",",T16_CUST_FNAME,",",T16_CUST_LNAME) AS CUST_INFO FROM (T16_CUSTOMER C INNER JOIN T16_CLAIM_SETTLEMENT CS ON CS.T16_CUST_ID=C.T16_CUST_ID
        INNER JOIN T16_CLAIM CL ON (CL.T16_CLAIM_ID=CS.T16_CLAIM_ID)INNER JOIN T16_COVERAGE CO ON (CO.T16_COVERAGE_ID=CS.T16_COVERAGE_ID AND 
        CL.T16_CLAIM_AMOUNT<CO.T16_COVERAGE_AMOUNT AND CL.T16_CLAIM_AMOUNT>(CS.T16_CLAIM_SETTLEMENT_ID+CS.T16_VEHICLE_ID+CS.T16_CLAIM_ID+CS.T16_CUST_ID)));`
  },
];

export default Queries;
