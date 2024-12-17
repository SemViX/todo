'use client'
import Container from "@/components/container";
import { ROUTES } from "@/utils/routes";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t} = useTranslation()
  const {push} = useRouter()
  return (
    <div>
      <Container className={'flex flex-col md:flex-row items-center sm:justify-center h-full gap-5'}>
        <div className="max-w-[600px] w-full flex flex-col gap-4 text-center items-center">
          <h1 className="text-headline text-4xl md:text-6xl font-bold uppercase">
            <span className="text-highlight uppercase">SVX-Planner</span> {t('hero title')}
          </h1>
          <p className="text-text text-xl font-bold">{t('hero subtitle')}</p>
          <div className="text-text text-lg font-bold border rounded-full text-center flex items-center justify-center gap-2 p-3 max-w-[350px] w-full
            border-border hover:border-highlight hover:text-highlight "
            onClick={() => push(ROUTES.TASKS)} 
          >
            {t('hero button text')} <MoveRight/>
          </div>
        </div>
        <div className="max-w-[600px] w-full mb-5"> 
          <Image src={'/main_page.png'} width={600} height={600} alt=""/>
        </div>
      </Container>
    </div>
  );
}
