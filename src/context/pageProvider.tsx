import { createContext, ReactNode, useState } from "react";

interface RegisterProviderProps {
  children: ReactNode;
}

interface Transaction {
  description: string;
  value: number;
  type: string;
}

interface PageContextValues {
  enterFinancePage: boolean;
  togglePage: () => void;
  transactionList: Transaction[];
  addTransaction: (value: Transaction) => void;
  removeTransaction: (value: Transaction) => void;
}

export const PageContext = createContext({} as PageContextValues);

export const PageProvider = ({ children }: RegisterProviderProps) => {
  const [enterFinancePage, setEnterFinancePage] = useState<boolean>(false);
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  const addTransaction = (newTransaction: Transaction) =>
    setTransactionList([...transactionList, newTransaction]);

  const removeTransaction = (transaction: Transaction) =>
    setTransactionList([
      ...transactionList.filter((item) => item !== transaction),
    ]);

  const togglePage = () => setEnterFinancePage(!enterFinancePage);

  return (
    <PageContext.Provider
      value={{
        enterFinancePage,
        togglePage,
        transactionList,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
