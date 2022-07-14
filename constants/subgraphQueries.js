import { gql } from "@apollo/client";

export const GET_ACTIVE_TRANSACTIONS = gql`
    {
        aggTransactions(first: 25, orderBy: id, orderDirection: desc, where: { executed: false }) {
            txId
            createdBy
            to
            value
            data
            description
            numConfirmations
            numConfirmationsRequired
            executable
        }
    }
`;

export const GET_EXECUTED_TRANSACTIONS = gql`
    {
        aggTransactions(first: 25, orderBy: id, orderDirection: desc, where: { executed: true }) {
            txId
            createdBy
            to
            value
            data
            description
            numConfirmations
            numConfirmationsRequired
            executable
        }
    }
`;

export const GET_ALL_TRANSACTIONS = gql`
    {
        transactions(first: 50, orderBy: id, orderDirection: desc) {
            id
            transactionType
            sentBy
            aggTransaction {
                txId
                to
                value
                data
                description
                numConfirmations
                numConfirmationsRequired
                executed
            }
        }
    }
`;
