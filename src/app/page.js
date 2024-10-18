import Navbar from "@/components/Header/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import Image from "next/image";
import CollectionSection from "@/components/Collections/CollectionSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import CollectionBox from "@/components/Category/Category";
import Policies from "@/components/Policy/Policies";
import CustomerFavorite from "@/components/CustomerFavorite/CustomerFavorite";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <CollectionBox></CollectionBox>
      <CollectionSection></CollectionSection>
      <CustomerFavorite></CustomerFavorite>
      <Policies></Policies>
      <Subscribe></Subscribe>
    </div>
  );
}
