import { TransactionReceipt, TransactionResponse } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useTransactions } from "../api/getTransactions";
import { Transaction } from "./Transaction";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";

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
    <TableContainer>
      <Table variant="striped" size={"md"}>
        <Thead>
          <Tr>
            <Th>Latest Transactions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactionDates?.slice(0, 6).map((transaction, index) => {
            return <Transaction {...transaction} />;
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>View More</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
