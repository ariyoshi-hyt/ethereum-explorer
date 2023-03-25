import { TransactionReceipt, TransactionResponse } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useTransactions } from "../api/getTransactions";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const [transactionDates, setTransactionDates] =
    useState<
      Array<Pick<TransactionResponse, "timestamp" | "to" | "from" | "hash">>
    >();

  const { isLoading, data } = useTransactions({});

  useEffect(() => {
    data &&
      Promise.all(data).then((resolvedData) =>
        setTransactionDates(resolvedData)
      );
  }, [data]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (!data?.length) {
    return <div>block does not exist</div>;
  }

  return (
    <ul>
      <>
        <li>
          <h1 className="text-lg">Latest Transactions</h1>
        </li>
        {transactionDates?.slice(0, 6).map((transaction, index) => {
          return (
            <li key={index} className="grid grid-cols-2">
              <Transaction {...transaction} />
            </li>
          );
        })}
      </>
    </ul>
  );
};
