"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-28 px-6 mb-20 max-w-7xl mx-auto">
        <section className="flex justify-between items-center px-4">
          <h3>OLÁ, ANNELY!</h3>
          <div className="flex gap-2">
            <Input />
            <Button>
              <Search />
            </Button>
            <Button>
              {" "}
              <Plus />
            </Button>
          </div>
        </section>

        <section className="mt-6">
          <h3>EVENTOS EM ANDAMENTO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent>
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1676973464513-7489d4ca4802?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-md w-full max-h-[200px] object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1676973464513-7489d4ca4802?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-md w-full max-h-[200px] object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1676973464513-7489d4ca4802?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-md w-full max-h-[200px] object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="mt-6">
          <h3>MEUS EVENTOS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent>
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1676973464513-7489d4ca4802?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-md w-full max-h-[200px] object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1676973464513-7489d4ca4802?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-md w-full max-h-[200px] object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1676973464513-7489d4ca4802?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-md w-full max-h-[200px] object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
