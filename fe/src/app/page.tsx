import type { Metadata } from 'next'
import HomePage from "@/components/layout/homepage";
export const metadata: Metadata = {
  title: "QuangHuyDev - Trang chủ",
  description: 'Tạo bởi QuangHuyDev ',
}

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}