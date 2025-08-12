import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faGithub, faApple } from "@fortawesome/free-brands-svg-icons"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Join() {
  return (
    <>
      <div className="mx-auto flex h-screen w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="font-KBODiaGothic_bold text-2xl font-semibold tracking-tight">회원 가입</h1>
        </div>
        <div className="flex flex-col justify-center space-y-6 font-SUITE_Regular">
          <div>
            <div className="flex flex-col justify-center space-y-6 font-SUITE_Regular">
              <div>
                <Label htmlFor="id" className="p-1">
                  아이디
                </Label>
                <Input placeholder="아이디를 입력하세요." />
              </div>
              <div>
                <Label htmlFor="pwd" className="p-1">
                  비밀번호
                </Label>
                <Input placeholder="비밀번호를 입력하세요." type="password" />
              </div>
              <div>
                <Label htmlFor="pwdCheck" className="p-1">
                  비밀번호 확인
                </Label>
                <Input placeholder="비밀번호를 다 입력하세요." type="password" />
              </div>
            </div>
          </div>
          <Button>가입하기</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center font-SUITE_Regular">
            <span className="bg-background px-2 text-muted-foreground">또는</span>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faGoogle} className="text-lg font-bold" />
          </Button>
          <Button variant="ghost" size="icon">
            <span className="text-xl font-bold">N</span>
          </Button>
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faGithub} className="text-lg font-bold" />
          </Button>
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faApple} className="text-lg font-bold" />
          </Button>
        </div>
        <div className="flex flex-col justify-center space-y-6 font-SUITE_Regular">
          <span className="px-8 text-center text-sm text-muted-foreground">
            계정이 이미 있나요?{" "}
            <Link href="/auth/login" className="text-blue-500 hover:text-blue-700">
              로그인→
            </Link>
          </span>
          <p className="px-8 text-center text-sm text-muted-foreground">
            회원 가입 버튼을 누르실 경우, 당신은{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              이용약관
            </Link>
            에 동의한 것으로 간주합니다.
          </p>
        </div>
      </div>
    </>
  )
}
