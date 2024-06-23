import Image from "next/image";
import HomeLogo from "@/ui/logo";
import { ArrowRightIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { shimmer } from "@/ui/animations";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-4">
      <div className={`${shimmer} relative overflow-hidden`}>
        <div className="flex items-center h-20 p-2 bg-blue-500 rounded-lg">
          <HomeLogo />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4 grow md:flex-row">
        <div className="flex flex-col justify-center gap-6 px-6 py-10 rounded-lg bg-gray-50 md:w-3/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>대시보드에 오신 걸 환영합니다.</strong> <br />
            Next.js 웹 애플리케이션 성능을 분석하는 대시보드입니다.
          </p>

          <div className="flex gap-2">
            <Link
              href="/login"
              className="flex items-center self-start gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-400 md:text-base"
            >
              로그인 <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/signup"
              className="flex items-center self-start gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-400 md:text-base"
            >
              회원가입 <UserPlusIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>

        <div>
          <Image
            // src="/desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            // src="/mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
