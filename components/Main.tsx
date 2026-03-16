import { View } from "react-native";
import AmountSection from "@/components/tip-calculator/AmountSection";
import CalculatorHeader from "@/components/tip-calculator/CalculatorHeader";
import PeopleSection from "@/components/tip-calculator/PeopleSection";
import ResultsSummary from "@/components/tip-calculator/ResultsSummary";
import TipSelector from "@/components/tip-calculator/TipSelector";
import { TipCalculatorProvider } from "@/contexts/TipCalculatorContext";

export default function Main() {
  return (
    <TipCalculatorProvider>
      <View className="flex-1 items-center justify-center bg-[#eef3ff] p-5">
        <View className="absolute -right-20 -top-[70px] h-[260px] w-[260px] rounded-full bg-[#c9d8ff] opacity-60" />
        <View className="absolute -bottom-[60px] -left-[70px] h-[220px] w-[220px] rounded-full bg-[#b6f0dc] opacity-50" />

        <View className="w-full max-w-[420px] rounded-3xl border border-[#dde5ff] bg-[#fdfdff] p-[22px] shadow-lg shadow-[#243673]/20">
          <CalculatorHeader />
          <AmountSection />
          <PeopleSection />
          <TipSelector />
          <ResultsSummary />
        </View>
      </View>
    </TipCalculatorProvider>
  );
}
