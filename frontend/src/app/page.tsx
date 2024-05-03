import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
6;

export default function Home() {
  return (
    <main className="h-screen bg-gray-900 flex items-center justify-center">
      <section>
        <div className="w-full h-full ">
          <Card className="border-none px-12 py-8 bg-gray-100 max-w-[540px] rounded-xl shadow-xl shadow-orange-100/30">
            <CardHeader className="text-2xl text-center font-bold bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
              Welcome to CryptoRider
            </CardHeader>
            <CardDescription>
              Choose where you want to go and start your journey or become a
              driver and earn money
            </CardDescription>
            <div className="flex flex-1 justify-center items-center mt-8">
              <CardContent className="">
                <Link href="/user">User</Link>
              </CardContent>
              <CardContent className="">
                <Link href="/rider">Driver</Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
