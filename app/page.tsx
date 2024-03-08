import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/home/Index";
import Graduate from "@/components/homeContent/Graduate";
import Counter from "@/components/counter/Index";
import Contact from "@/components/contact/Index";
import Comment from "@/components/comments/Index";
import Course from "@/components/course/Index";

export default function Main() {
  return (
    <main className="">
     <div className="">
      <div className="">
      <Home />
      </div>
      <Graduate />
      <Counter />
      <Course />
      <Comment />
      <Contact />
     </div>
    </main>
  );
}
