import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type TipCalculatorContextValue = {
  amount: string;
  setAmount: (value: string) => void;
  people: string;
  setPeople: (value: string) => void;
  tipPercent: number;
  setTipPercent: (value: number) => void;
  editingAmount: boolean;
  setEditingAmount: (value: boolean) => void;
  editingPeople: boolean;
  setEditingPeople: (value: boolean) => void;
  parsedAmount: number;
  parsedPeople: number;
  tipValue: number;
  perPersonValue: number;
  tipPerPerson: number;
  formatCurrency: (value: number) => string;
};

const TipCalculatorContext = createContext<TipCalculatorContextValue | undefined>(
  undefined,
);

export function TipCalculatorProvider({ children }: { children: ReactNode }) {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTipPercent] = useState(15);
  const [editingAmount, setEditingAmount] = useState(false);
  const [editingPeople, setEditingPeople] = useState(false);

  const normalized = amount.replace(",", ".");
  const parsedAmount = Number.parseFloat(normalized);

  const parsedPeople = Number.parseInt(people, 10);

  const tipValue = parsedAmount * (tipPercent / 100);
  const tipPerPerson = tipValue / parsedPeople;
  const perPersonValue = (parsedAmount)/parsedPeople + tipPerPerson;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <TipCalculatorContext.Provider
      value={{
        amount,
        setAmount,
        people,
        setPeople,
        tipPercent,
        setTipPercent,
        editingAmount,
        setEditingAmount,
        editingPeople,
        setEditingPeople,
        parsedAmount,
        parsedPeople,
        tipValue,
        perPersonValue,
        tipPerPerson,
        formatCurrency,
      }}
    >
      {children}
    </TipCalculatorContext.Provider>
  );
}

export function useTipCalculator() {
  const context = useContext(TipCalculatorContext);

  if (!context) {
    throw new Error("useTipCalculator must be used within TipCalculatorProvider");
  }

  return context;
}
